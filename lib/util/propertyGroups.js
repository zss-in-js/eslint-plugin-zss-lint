// reference: [https://github.com/stormwarning/stylelint-config-recess-order/blob/main/groups.js]
// This code is based on the ISC-licensed repository: stylelint-config-recess-order
// License: ISC

/**
 * @typedef {Object} Group
 * @property {Array<string>} properties
 */

/** @type {Group[]} */
const propertyGroups = [
  {
    properties: ['composes'],
  },

  /**
   * Cascade and inheritance.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade#reference
   */
  {
    properties: ['all'],
  },

  /**
   * Positioned layout.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout#reference
   */
  {
    properties: [
      'position',
      'inset',
      'insetBlock',
      'insetBlockStart',
      'insetBlockEnd',
      'insetInline',
      'insetInlineStart',
      'insetInlineEnd',
      'top',
      'right',
      'bottom',
      'left',
      'zIndex',
      'float',
      'clear',
    ],
  },

  /**
   * Display.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display#reference
   */
  {
    properties: ['boxSizing', 'display', 'visibility'],
  },

  /**
   * Flexible box layout.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout#reference
   */
  {
    properties: [
      'flex',
      'flexGrow',
      'flexShrink',
      'flexBasis',
      'flexFlow',
      'flexDirection',
      'flexWrap',
      'WebkitBoxOrient',
    ],
  },

  /**
   * Grid layout.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout#reference
   */
  {
    properties: [
      'grid',
      'gridArea',
      'gridTemplate',
      'gridTemplateAreas',
      'gridTemplateRows',
      'gridTemplateColumns',
      'gridRow',
      'gridRowStart',
      'gridRowEnd',
      'gridColumn',
      'gridColumnStart',
      'gridColumnEnd',
      'gridAutoRows',
      'gridAutoColumns',
      'gridAutoFlow',
      'gridGap',
      'gridRowGap',
      'gridColumnGap',
    ],
  },

  /**
   * Box alignment.  Relates to both Flexbox and Grid layout.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment#reference
   */
  {
    properties: [
      'gap',
      'rowGap',
      'columnGap',
      'placeContent',
      'placeItems',
      'placeSelf',
      'alignContent',
      'alignItems',
      'alignSelf',
      'justifyContent',
      'justifyItems',
      'justifySelf',
    ],
  },

  /**
   * Order.
   * Part of Display module, but relates to both Flexbox and Grid layout.
   */
  {
    properties: ['order'],
  },

  /**
   * Box sizing.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_sizing#reference
   */
  {
    properties: [
      'inlineSize',
      'minInlineSize',
      'maxInlineSize',
      'width',
      'minWidth',
      'maxWidth',
      'blockSize',
      'minBlockSize',
      'maxBlockSize',
      'height',
      'minHeight',
      'maxHeight',
      'aspectRatio',
    ],
  },

  /**
   * Box model.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model#reference
   */
  {
    properties: [
      'padding',
      'paddingBlock',
      'paddingBlockStart',
      'paddingBlockEnd',
      'paddingInline',
      'paddingInlineStart',
      'paddingInlineEnd',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'margin',
      'marginBlock',
      'marginBlockStart',
      'marginBlockEnd',
      'marginInline',
      'marginInlineStart',
      'marginInlineEnd',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
    ],
  },

  /**
   * Anchor positioning.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning#reference
   */

  /**
   * Containment.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment#reference
   */

  /**
   * Overflow.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overflow#reference
   */
  {
    properties: [
      'overflow',
      'overflowInline',
      'overflowBlock',
      'overflowX',
      'overflowY',
      'scrollbarGutter',
      'WebkitOverflowScrolling',
      'msOverflowX',
      'msOverflowY',
      'msOverflowStyle',
      'textOverflow',
      'WebkitLineClamp',
      'lineClamp',
      'scrollBehaviour',
    ],
  },

  /**
   * Overscroll behavior.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overscroll_behavior#reference
   */
  {
    properties: [
      'overscrollBehavior',
      'overscrollBehaviorInline',
      'overscrollBehaviorBlock',
      'overscrollBehaviorX',
      'overscrollBehaviorY',
    ],
  },

  /**
   * Fonts.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts#reference
   */
  {
    properties: [
      'font',
      'fontFamily',
      'fontSize',
      'fontSizeAdjust',
      'fontVariationSettings',
      'fontStyle',
      'fontWeight',
      'fontOpticalSizing',
      'fontStretch',
      'fontFeatureSettings',
      'fontKerning',
      'fontVariant',
      'fontVariantLigatures',
      'fontVariantCaps',
      'fontVariantAlternates',
      'fontVariantNumeric',
      'fontVariantEastAsian',
      'fontVariantPosition',
      'WebkitFontSmoothing',
      'MozOsxFontSmoothing',
      'fontSmooth',
    ],
  },

  /**
   * Inline layout.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_inline_layout#reference
   */
  {
    properties: [
      'lineHeight',
      'verticalAlign',
      'alignmentBaseline',
      'baselineShift',
      'dominantBaseline',
    ],
  },

  /**
   * Colors.
   *
   * Although `opacity` is technically part of this module, it is grouped
   * with the Compositing and blending module for now.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors#reference
   */
  {
    properties: [
      'color',
      'WebkitTextFillColor',
      'WebkitTextStroke',
      'WebkitTextStrokeWidth',
      'WebkitTextStrokeColor',
    ],
  },

  /**
   * Text.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text#reference
   */
  {
    properties: [
      'textAlign',
      'textAlignLast',
      'textJustify',
      'textIndent',
      'textTransform',
      'wordSpacing',
      'letterSpacing',
      'hyphens',
      'wordBreak',
      'textWrap',
      'wordWrap',
      'overflowWrap',
      'tabSize',
      'whiteSpace',
    ],
  },

  /**
   * Text decoration.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text_decoration#reference
   */
  {
    properties: [
      'textEmphasis',
      'textEmphasisColor',
      'textEmphasisStyle',
      'textEmphasisPosition',
      'textDecoration',
      'textDecorationLine',
      'textDecorationThickness',
      'textDecorationStyle',
      'textDecorationColor',
      'textUnderlinePosition',
      'textUnderlineOffset',
      'textShadow',
    ],
  },

  /**
   * Ruby layout.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_ruby_layout#reference
   */

  /**
   * Font loading.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_font_loading#reference
   */
  {
    properties: [
      'src',
      'fontDisplay',
      'unicodeRange',
      'sizeAdjust',
      'ascentOverride',
      'descentOverride',
      'lineGapOverride',
    ],
  },

  /**
   * Basic user interface.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_basic_user_interface#reference
   */
  {
    properties: [
      'appearance',
      'accentColor',
      'pointerEvents',
      'msTouchAction',
      'touchAction',
      'cursor',
      'caretColor',
      'zoom',
      'resize',
      'userSelect',
      'WebkitUserSelect',
      'navIndex',
      'navUp',
      'navRight',
      'navDown',
      'navLeft',
      'outline',
      'outlineWidth',
      'outlineStyle',
      'outlineColor',
      'outlineOffset',
    ],
  },

  /**
   * Color adjustment.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_color_adjustment#reference
   */
  {
    properties: ['colorScheme'],
  },

  /**
   * Table.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_table#reference
   */
  {
    properties: [
      'tableLayout',
      'emptyCells',
      'captionSide',
      'borderSpacing',
      'borderCollapse',
    ],
  },

  /**
   * Generated content.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_generated_content#reference
   */
  {
    properties: ['content', 'quotes'],
  },

  /**
   * Lists and counters.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_lists#reference
   */
  {
    properties: [
      'listStyle',
      'listStylePosition',
      'listStyleType',
      'listStyleImage',
      'counterReset',
      'counterSet',
      'counterIncrement',
    ],
  },

  /**
   * Scroll snap.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap#reference
   */
  {
    properties: [
      'scrollSnapType',
      'scrollSnapAlign',
      'scrollSnapStop',
      'scrollPadding',
      'scrollPaddingBlock',
      'scrollPaddingBlockStart',
      'scrollPaddingBlockEnd',
      'scrollPaddingInline',
      'scrollPaddingInlineStart',
      'scrollPaddingInlineEnd',
      'scrollPaddingTop',
      'scrollPaddingRight',
      'scrollPaddingBottom',
      'scrollPaddingLeft',
      'scrollMargin',
      'scrollMarginBlock',
      'scrollMarginBlockStart',
      'scrollMarginBlockEnd',
      'scrollMarginInline',
      'scrollMarginInlineStart',
      'scrollMarginInlineEnd',
      'scrollMarginTop',
      'scrollMarginRight',
      'scrollMarginBottom',
      'scrollMarginLeft',
    ],
  },

  /**
   * Scrollbars styling.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scrollbars_styling#reference
   */
  {
    properties: ['scrollbarColor', 'scrollbarWidth'],
  },

  /**
   * Images.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images#reference
   */
  {
    properties: [
      'objectFit',
      'objectPosition',
      'msInterpolationMode',
      'imageOrientation',
      'imageRendering',
      'imageResolution',
    ],
  },

  /**
   * Backgrounds and borders.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders#reference
   */
  {
    properties: [
      'background',
      'backgroundColor',
      'backgroundImage',
      'backgroundRepeat',
      'backgroundAttachment',
      'backgroundPosition',
      'backgroundPositionX',
      'backgroundPositionY',
      'backgroundClip',
      'backgroundOrigin',
      'backgroundSize',
      'border',
      'borderColor',
      'borderStyle',
      'borderWidth',
      'borderBlock',
      'borderBlockStart',
      'borderBlockStartColor',
      'borderBlockStartStyle',
      'borderBlockStartWidth',
      'borderBlockEnd',
      'borderBlockEndColor',
      'borderBlockEndStyle',
      'borderBlockEndWidth',
      'borderInline',
      'borderInlineStart',
      'borderInlineStartColor',
      'borderInlineStartStyle',
      'borderInlineStartWidth',
      'borderInlineEnd',
      'borderInlineEndColor',
      'borderInlineEndStyle',
      'borderInlineEndWidth',
      'borderTop',
      'borderTopColor',
      'borderTopStyle',
      'borderTopWidth',
      'borderRight',
      'borderRightColor',
      'borderRightStyle',
      'borderRightWidth',
      'borderBottom',
      'borderBottomColor',
      'borderBottomStyle',
      'borderBottomWidth',
      'borderLeft',
      'borderLeftColor',
      'borderLeftStyle',
      'borderLeftWidth',
      'borderRadius',
      'borderStartStartRadius',
      'borderStartEndRadius',
      'borderEndStartRadius',
      'borderEndEndRadius',
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomRightRadius',
      'borderBottomLeftRadius',
      'borderImage',
      'borderImageSource',
      'borderImageSlice',
      'borderImageWidth',
      'borderImageOutset',
      'borderImageRepeat',
      'boxShadow',
    ],
  },

  /**
   * Compositing and blending.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_compositing_and_blending#reference
   */
  {
    properties: ['backgroundBlendMode', 'isolation', 'mixBlendMode'],
  },

  /**
   * Filter effects.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_filter_effects#properties
   */
  {
    properties: ['filter', 'backdropFilter'],
  },

  /**
   * Masking.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_masking#reference
   */
  {
    properties: [
      'clip',
      'clipPath',
      'maskBorder',
      'maskBorderSource',
      'maskBorderSlice',
      'maskBorderWidth',
      'maskBorderOutset',
      'maskBorderRepeat',
      'maskBorderMode',
      'mask',
      'maskImage',
      'maskMode',
      'maskRepeat',
      'maskPosition',
      'maskClip',
      'maskOrigin',
      'maskSize',
      'maskComposite',
    ],
  },

  /**
   * Shapes.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shapes#reference
   */

  /**
   * Writing modes.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_writing_modes#reference
   */
  {
    properties: ['writingMode'],
  },

  /**
   * SVG presentation attributes.
   *
   * Some of these may fall under a specific module, but if they only apply
   * to SVG-specific elements, they will be grouped here.
   */
  {
    properties: [
      'textAnchor',
      'fill',
      'fillRule',
      'fillOpacity',
      'stroke',
      'strokeOpacity',
      'strokeWidth',
      'strokeLinecap',
      'strokeLinejoin',
      'strokeMiterlimit',
      'strokeDasharray',
      'strokeDashoffset',
      'colorInterpolation',
      'colorInterpolationFilters',
      'floodColor',
      'floodOpacity',
      'lightingColor',
      'markerStart',
      'markerMid',
      'markerEnd',
      'stopColor',
      'stopOpacity',
      'shapeRendering',
    ],
  },

  /**
   * Transforms.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms#reference
   */
  {
    properties: [
      'transform',
      'transformOrigin',
      'rotate',
      'scale',
      'translate',
      'perspective',
      'perspectiveOrigin',
    ],
  },

  /**
   * Transitions.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions#reference
   */
  {
    properties: [
      'transition',
      'transitionDelay',
      'transitionTimingFunction',
      'transitionDuration',
      'transitionProperty',
    ],
  },

  /**
   * View transitions.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_view_transitions#reference
   */

  /**
   * Animations.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations#reference
   */
  {
    properties: [
      'animation',
      'animationName',
      'animationDuration',
      'animationTimingFunction',
      'animationDelay',
      'animationIterationCount',
      'animationDirection',
      'animationPlayState',
    ],
  },

  /**
   * Scroll-driven animations.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations#reference
   */

  /**
   * Motion path.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_motion_path#reference
   */

  /**
   * Will change.
   * @see https://drafts.csswg.org/css-will-change/#will-change
   */
  {
    properties: ['willChange'],
  },

  /**
   * Fragmentation.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fragmentation#reference
   */
  {
    properties: [
      'breakBefore',
      'breakAfter',
      'breakInside',
      'widows',
      'orphans',
    ],
  },

  /**
   * Multi-column layout.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout#reference
   */
]

module.exports = propertyGroups
