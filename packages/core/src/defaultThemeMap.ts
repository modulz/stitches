const space = 'space'
const colors = 'colors'
const sizes = 'sizes'
const radii = 'radii'
const borderStyles = 'borderStyles'
const borderWidths = 'borderWidths'

const defaultThemeMap = {
	gap: space,
	gridGap: space,
	columnGap: space,
	gridColumnGap: space,
	rowGap: space,
	gridRowGap: space,
	inset: space,
	insetBlock: space,
	insetBlockEnd: space,
	insetBlockStart: space,
	insetInline: space,
	insetInlineEnd: space,
	insetInlineStart: space,
	margin: space,
	marginTop: space,
	marginRight: space,
	marginBottom: space,
	marginLeft: space,
	marginBlock: space,
	marginBlockEnd: space,
	marginBlockStart: space,
	marginInline: space,
	marginInlineEnd: space,
	marginInlineStart: space,
	padding: space,
	paddingTop: space,
	paddingRight: space,
	paddingBottom: space,
	paddingLeft: space,
	paddingBlock: space,
	paddingBlockEnd: space,
	paddingBlockStart: space,
	paddingInline: space,
	paddingInlineEnd: space,
	paddingInlineStart: space,
	top: space,
	right: space,
	bottom: space,
	left: space,
	fontSize: 'fontSizes',
	background: colors,
	backgroundColor: colors,
	backgroundImage: colors,
	border: colors,
	borderColor: colors,
	borderTopColor: colors,
	borderRightColor: colors,
	borderBottomColor: colors,
	borderLeftColor: colors,
	caretColor: colors,
	color: colors,
	columnRuleColor: colors,
	outlineColor: colors,
	fill: colors,
	stroke: colors,
	fontFamily: 'fonts',
	fontWeight: 'fontWeights',
	lineHeight: 'lineHeights',
	letterSpacing: 'letterSpacings',
	blockSize: sizes,
	minBlockSize: sizes,
	maxBlockSize: sizes,
	inlineSize: sizes,
	minInlineSize: sizes,
	maxInlineSize: sizes,
	width: sizes,
	minWidth: sizes,
	maxWidth: sizes,
	height: sizes,
	minHeight: sizes,
	maxHeight: sizes,
	flexBasis: sizes,
	borderWidth: borderWidths,
	borderTopWidth: borderWidths,
	borderLeftWidth: borderWidths,
	borderRightWidth: borderWidths,
	borderBottomWidth: borderWidths,
	borderStyle: borderStyles,
	borderTopStyle: borderStyles,
	borderLeftStyle: borderStyles,
	borderRightStyle: borderStyles,
	borderBottomStyle: borderStyles,
	borderRadius: radii,
	borderTopLeftRadius: radii,
	borderTopRightRadius: radii,
	borderBottomRightRadius: radii,
	borderBottomLeftRadius: radii,
	boxShadow: 'shadows',
	textShadow: 'shadows',
	zIndex: 'zIndices',
	transition: 'transitions',
} as const

export default defaultThemeMap
