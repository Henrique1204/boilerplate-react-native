import { colors, fontFamily, fontSize, theme } from '@assets/theme';

export type IColors = typeof colors;
export type IColorsEnum = keyof IColors;

export type IFontFamily = typeof fontFamily;
export type IFontFamilyEnum = keyof IFontFamily;

export type IFontSize = typeof fontSize;
export type IFontSizeEnum = keyof IFontSize;

export type ITheme = typeof theme;
