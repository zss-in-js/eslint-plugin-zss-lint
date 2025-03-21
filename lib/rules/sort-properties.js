/**
 * @fileoverview CSS properties recess base reorder fix feature
 * @author Refirst
 * Compatible with eslint 8 and below or 9 and above.
 */

'use strict'

const propertyGroups = require('../util/propertyGroups')

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @returns {import('eslint').SourceCode}
 */
function getSourceCode(context) {
  return context.getSourceCode ? context.getSourceCode() : context.sourceCode
}

function getPropertyName(property) {
  if (property.key.type === 'Literal' && Array.isArray(property.key.value)) {
    return property.key.value
  }
  return property.key.name || property.key.value || ''
}

function getPropertyIndex(property) {
  const name = getPropertyName(property)

  const propertyName = typeof name === 'string' ? name : ''

  let lastGroupIndex = 0
  let maxPropIndex = 0

  for (let i = 0; i < propertyGroups.length; i++) {
    const group = propertyGroups[i]
    const propIndex = group.properties.indexOf(propertyName)

    if (propIndex !== -1) {
      return i * 1000 + propIndex
    }

    lastGroupIndex = i
    maxPropIndex = Math.max(maxPropIndex, group.properties.length)
  }

  if (typeof propertyName === 'string' && propertyName.startsWith('&'))
    return (propertyGroups.length + 1) * 1000
  if (typeof propertyName === 'string' && propertyName.includes(':'))
    return (propertyGroups.length + 2) * 1000
  if (typeof propertyName === 'string' && propertyName.includes('@media'))
    return (propertyGroups.length + 3) * 1000

  return lastGroupIndex * 1000 + maxPropIndex + 1
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Sort CSS properties according to defined groups and specific rules.',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      sortProperties:
        'Property "{{property}}" is out of order. Expected position: {{position}}.',
    },
  },

  create(context) {
    return {
      ObjectExpression(node) {
        const sourceCode = getSourceCode(context)
        const properties = node.properties.filter((prop) => prop.key)

        const sortedProperties = [...properties].sort((a, b) => {
          const indexA = getPropertyIndex(a)
          const indexB = getPropertyIndex(b)
          return indexA - indexB
        })

        const misorderedProperties = properties.filter(
          (prop, index) => prop !== sortedProperties[index],
        )

        if (misorderedProperties.length === 0) {
          return
        }

        const match = sourceCode.getText(node).match(/^{\s*\n(\s*)/)
        const objectIndent = match ? match[1] : ''
        const lineCase = match ? '\n' : ' '

        misorderedProperties.forEach((prop) => {
          const correctIndex = sortedProperties.indexOf(prop)

          context.report({
            node: prop,
            messageId: 'sortProperties',
            data: {
              position: correctIndex + 1,
              property: getPropertyName(prop),
            },
            fix(fixer) {
              const formattedProps = sortedProperties
                .map((sortedProp) => {
                  if (Array.isArray(getPropertyName(sortedProp))) {
                    const arrayKey = sourceCode.getText(sortedProp.key)
                    const arrayContent = sortedProp.value.properties
                      .map(
                        (innerProp) =>
                          `${objectIndent}  ${sourceCode.getText(innerProp)}`,
                      )
                      .join(`,${lineCase}`)
                    return `${objectIndent}${arrayKey}: {\n${arrayContent}\n${objectIndent}}`
                  }
                  return `${objectIndent}${sourceCode.getText(sortedProp)}`
                })
                .join(`,${lineCase}`)

              return fixer.replaceTextRange(
                [node.range[0] + 1, node.range[1] - 1],
                `${lineCase}${formattedProps}${lineCase}`,
              )
            },
          })
        })
      },
    }
  },
}
