import { AccessibilityProps } from 'react-native';

import { ITheme } from './core/assets/theme';

import { IMealEntity } from './core/storage/meal';

declare global {
	export interface IDefaultProps extends Partial<AccessibilityProps> {
		testID?: string;
	}

	export interface IDefaultPropsWithChildren extends IDefaultProps {
		children?: React.ReactNode;
	}

	export interface IComponent<T = {}> extends React.FC<IDefaultProps & T> {}

	export interface IComponentWithChildren<T = {}>
		extends React.FC<IDefaultPropsWithChildren & T> {}

	export interface IPlayersRouteParams {
		group: string;
	}

	export type IThemeProps<T extends {}> = T & {
		theme: ITheme;
	};

	export type IIconEnum =
		| 'arrowLeft'
		| 'arrowUpRight'
		| 'pencil'
		| 'plus'
		| 'trash';

	export interface IStatisticRouteParams {
		title: string;
		description: string;
		variant?: 'primary' | 'secondary';
	}

	export interface ISuccessRouteParams {
		insideDiet: boolean;
	}

	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			mealDetails: IMealEntity;
			mealForm?: IMealEntity;
			statistic: IStatisticRouteParams;
			success: ISuccessRouteParams;
		}
	}
}
