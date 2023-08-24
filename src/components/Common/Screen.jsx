import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import {colors} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Screen = ({children}) => {
  const insets = useSafeAreaInsets();

  const isIOS = Platform.OS === 'ios';
  const paddingTop = isIOS
    ? insets.top
    : StatusBar.currentHeight === insets.top
    ? insets.top + 16
    : insets.top > 0
    ? insets.top
    : 28;

  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingTop,
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.veryLightGrey,
  },
});

export default Screen;
