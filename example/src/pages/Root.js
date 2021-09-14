import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';

import Section from '../compoments/Section';
import { useTheme } from 'react-native-cm-theme';

const Root = () => {
  const { theme, themeStyles, themeColors, themeImages } = useTheme();

  return (
    <SafeAreaView style={themeStyles.container}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            padding: 20,
            backgroundColor: themeColors.backgroundColor,
          }}>
          <Section title="App">
            Hello, I am CMTheme.
            Now change system to dark or light mode.
          </Section>
          <Image style={{ width: 50, height: 50, marginTop: 50 }} source={themeImages.add_photo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Root;
