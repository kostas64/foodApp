import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import Button from '../Common/Button';
import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const LoginMethods = ({widthValue}) => {
  const insets = useSafeAreaInsets();

  const paddingBottom =
    insets.bottom > 0
      ? {paddingBottom: insets.bottom}
      : {paddingBottom: DimensionsUtils.getDP(18)};

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: widthValue.value,
    transform: [{translateY: widthValue.value * -4}],
  }));

  return (
    <>
      {/* Footer */}
      <Animated.View style={[styles.container, paddingBottom, animatedStyle]}>
        <Button
          iconLeft={images.facebook}
          label={'Facebook login'}
          containerStyle={styles.button1}
          inputStyle={{fontSize: DimensionsUtils.getFontSize(14)}}
        />

        <View style={{width: DimensionsUtils.getDP(16)}} />

        <Button
          iconLeft={images.google}
          label={'Google login'}
          containerStyle={styles.button2}
          inputStyle={{fontSize: DimensionsUtils.getFontSize(14)}}
        />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: DimensionsUtils.getDP(16),
  },
  button1: {
    backgroundColor: '#0d59ad',
    flex: 1,
    marginHorizontal: 0,
  },

  button2: {
    flex: 1,
    backgroundColor: colors.grey,
    marginHorizontal: 0,
  },
});

export default LoginMethods;
