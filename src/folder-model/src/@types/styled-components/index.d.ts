import 'styled-components';

import { ITheme } from '../core/assets/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
