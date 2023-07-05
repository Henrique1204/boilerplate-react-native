import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import {
	useFonts,
	Nunito_400Regular,
	Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import { theme } from '@assets/theme/index';

import Routes from './src/routes';

import { Loader } from '@components/index';

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_700Bold,
	});

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle='dark-content'
				backgroundColor='transparent'
				translucent
			/>

			<Loader
				loading={!fontsLoaded}
				accessibilityLabel='Animação de carregamento esperando arquivos carregarem.'
				aria-hidden={fontsLoaded}
			>
				<Routes />
			</Loader>
		</ThemeProvider>
	);
};

export default App;
