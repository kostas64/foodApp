import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import Button from '../Common/Button';
import {colors, images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const LoginMethods = ({widthValue}) => {
  const insets = useSafeAreaInsets();

  const paddingBottom =
    insets.bottom > 0
      ? {paddingBottom: insets.bottom}
      : {paddingBottom: DimensionsUtils.getDP(18)};

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: widthValue.value,
    width: widthValue.value * sizes.WIDTH,
    transform: [{translateX: ((1 - widthValue.value) * sizes.WIDTH) / 2}],
  }));

  return (
    <>
      {/* Footer */}
      <Animated.View style={[paddingBottom, animatedStyle]}>
        <Button
          iconLeft={images.facebook}
          label={'Continue with Facebook'}
          containerStyle={styles.button1}
        />

        <View style={styles.devider} />

        <Button
          iconLeft={images.google}
          label={'Continue with Google'}
          containerStyle={styles.button2}
        />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  button1: {
    bottom: 0,
    backgroundColor: '#0d59ad',
    marginHorizontal: DimensionsUtils.getDP(16),
  },
  devider: {
    width: '100%',
    height: DimensionsUtils.getDP(16),
  },
  button2: {
    backgroundColor: colors.grey,
    marginHorizontal: DimensionsUtils.getDP(16),
  },
});

export default LoginMethods;
