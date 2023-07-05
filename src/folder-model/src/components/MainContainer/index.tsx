import React from 'react';

import * as Styles from './styles';

const MainContainer: IComponentWithChildren = ({ children }) => {
	return <Styles.Container>{children}</Styles.Container>;
};

export default MainContainer;
