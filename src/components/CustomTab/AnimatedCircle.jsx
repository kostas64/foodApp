import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, useColorScheme} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const circleContainerSize = 54;

const AnimatedCircle = ({circleX}) => {
  const {colors} = useTheme();

  const scheme = useColorScheme();
  const backgroundColor = scheme === 'dark' ? colors.orange : 'white';

  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize / 2}],
    };
  }, []);

  return (
    <Animated.View
      style={[circleContainerStyle, {backgroundColor}, styles.container]}
    />
  );
};

export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -22,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
  },
});
