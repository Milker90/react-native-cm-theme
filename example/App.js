/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useColorScheme, Text } from 'react-native';
import { CMThemeProvider } from 'react-native-cm-theme';
import Root from './src/pages/Root';
import { data } from './src/theme';

const App = () => {
  const theme = useColorScheme();
  return (
    <CMThemeProvider theme={theme} data={data}>
      <Root />
    </CMThemeProvider>
  );
};

export default App;
