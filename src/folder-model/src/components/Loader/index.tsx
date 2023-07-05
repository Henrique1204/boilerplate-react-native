import React from 'react';

import * as Styles from './styles';

interface ILoaderProps {
	loading: boolean;
}

const Loader: IComponentWithChildren<ILoaderProps> = ({
	children,
	loading,
	...props
}) => {
	if (!loading) return <>{children}</>;

	return (
		<Styles.Container {...props}>
			<Styles.Loading />
		</Styles.Container>
	);
};

export default Loader;
