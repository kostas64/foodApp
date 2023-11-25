import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React from 'react';
import {StyleSheet} from 'react-native';

import {DimensionsUtils} from '../../utils/DimensionsUtils';

const HomeTitle = ({title, color, scrollY}) => {
  const animStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [0, 10, 104],
      [1, 0.5, 0],
      Extrapolate.CLAMP,
    ),
    height: interpolate(scrollY.value, [0, 160], [64, 0], Extrapolate.CLAMP),
    justifyContent: 'center',
  }));

  return (
    <Animated.Text style={[styles.title, animStyle, {color}]}>
      {title}
    </Animated.Text>
  );
};

export default HomeTitle;

const styles = StyleSheet.create({
  title: {
    top: 20,
    fontSize: DimensionsUtils.getFontSize(26),
    paddingLeft: DimensionsUtils.getDP(20),
    fontFamily: 'Poppins-Medium',
  },
});
