import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import {colors} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Screen = ({children}) => {
  const insets = useSafeAreaInsets();
  const isIOS = Platform.OS === 'ios';

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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.veryLightGrey,
  },
});

export default Screen;
