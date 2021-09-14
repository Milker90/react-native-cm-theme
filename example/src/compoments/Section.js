import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-cm-theme';

const Section = ({ children, title }) => {
  const { themeColors } = useTheme();
  return (
    <View >
      <Text
        style={[
          {
            color: themeColors.m1,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          {
            color: themeColors.m5,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({});
