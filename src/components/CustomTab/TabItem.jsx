import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, Image} from 'react-native';

import usePath from '../../hooks/usePath';
import {colors, images, sizes} from '../../constants';
import {getPathXCenterByIndex} from '../../utils/PathUtils';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ICON_SIZE = DimensionsUtils.getDP(24);
const LABEL_WIDTH = sizes.WIDTH / 3;

const AnimatedIcon = Animated.createAnimatedComponent(Image);

const TabItem = ({label, icon, index, activeIndex, onTabPress}) => {
  const {curvedPaths} = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -6 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: iconPositionX - ICON_SIZE / 2},
      ],
    };
  });
  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 42 : 100;
    return {
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: labelPosition - LABEL_WIDTH / 2},
      ],
    };
  });
  const iconColor = useSharedValue(
    activeIndex === index + 1 ? 'white' : 'rgba(128,128,128,0.8)',
  );

  //Adjust Icon color for this first render
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming('white');
    } else {
      iconColor.value = withTiming('rgba(128,128,128,0.8)');
    }
  }, [activeIndex]);

  return (
    <>
      <Animated.View style={[tabStyle]}>
        <Pressable hitSlop={styles.hitSlop} onPress={onTabPress}>
          <AnimatedIcon
            source={images[icon]}
            style={[
              styles.image,
              {
                tintColor:
                  index === activeIndex - 1 ? colors.orange : colors.grey,
              },
            ]}
          />
        </Pressable>
      </Animated.View>
      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: LABEL_WIDTH,
  },
  label: {
    color: colors.orange,
    fontSize: DimensionsUtils.getFontSize(16),
    fontFamily: 'Poppins-Medium',
  },
  hitSlop: {
    top: DimensionsUtils.getDP(30),
    bottom: DimensionsUtils.getDP(30),
    left: DimensionsUtils.getDP(30),
    right: DimensionsUtils.getDP(30),
  },
  image: {
    height: DimensionsUtils.getDP(24),
    width: DimensionsUtils.getDP(24),
    alignSelf: 'center',
  },
});
