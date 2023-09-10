import React from 'react';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Screen = ({children}) => {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  const isIOS = Platform.OS === 'ios';
  const styles = customStyle(colors);

  let paddingTop;

  if (isIOS) {
    if (insets.top > 20) {
      paddingTop = insets.top;
    } else {
      paddingTop = insets.top + DimensionsUtils.getDP(16);
    }
  } else {
    if (StatusBar.currentHeight === insets.top && StatusBar.currentHeight > 0) {
      paddingTop = insets.top + 16;
    } else {
      paddingTop = DimensionsUtils.getDP(28);
    }
  }

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

const customStyle = colors =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: colors.veryLightGrey,
    },
  });

export default Screen;
