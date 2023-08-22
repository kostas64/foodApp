import React from 'react';
import {View} from 'react-native';

import {colors} from '../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Screen = ({children}) => {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top > 0 ? insets.top : 24;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: paddingTop,
        paddingHorizontal: 24,
      }}>
      {children}
    </View>
  );
};

export default Screen;
