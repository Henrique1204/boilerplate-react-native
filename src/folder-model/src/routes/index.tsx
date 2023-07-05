import React from 'react';
import styled from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';

const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.gray_200};

	flex: 1;
`;

const Routes: React.FC = () => {
	return (
		<Container>
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</Container>
	);
};

export default Routes;
