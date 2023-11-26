import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {categories} from '../../assets/data/categories';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const AnimTouch = Animated.createAnimatedComponent(TouchableOpacity);

const CategoriesListItem = ({
  item,
  index,
  scrollY,
  selectedItem,
  setSelectedItem,
}) => {
  const {colors} = useTheme();
  const styles = customStyle(colors);

  const backgroundColor =
    selectedItem.id === index ? colors.orange : colors.white;
  const itemCircleColor =
    selectedItem.id === index ? 'white' : colors.lightGrey;
  const labelColor = selectedItem.id === index ? 'white' : colors.black;
  const hasLeftPadding = index === 0;

  const animTouch = useAnimatedStyle(() => ({
    borderRadius: interpolate(
      scrollY.value,
      [170, 250],
      [36, 16],
      Extrapolate.CLAMP,
    ),
  }));

  const animStyleImg = useAnimatedStyle(() => {
    const interpolation = interpolate(
      scrollY.value,
      [80, 220],
      [24, 0],
      Extrapolate.CLAMP,
    );

    return {
      height: interpolation,
      width: interpolation,
    };
  });

  const animStyleContImg = useAnimatedStyle(() => {
    const interpolation = interpolate(
      scrollY.value,
      [80, 220],
      [50, 0],
      Extrapolate.CLAMP,
    );

    return {
      width: interpolation,
      height: interpolation,
    };
  });

  const animText = useAnimatedStyle(() => ({
    marginBottom: interpolate(
      scrollY.value,
      [150, 210],
      [16, 0],
      Extrapolate.CLAMP,
    ),
    marginTop: interpolate(
      scrollY.value,
      [170, 230],
      [8, 0],
      Extrapolate.CLAMP,
    ),
  }));

  return (
    <AnimTouch
      onPress={() => setSelectedItem(categories[index])}
      style={[
        animTouch,
        styles.listContainer,
        {backgroundColor},
        hasLeftPadding && styles.itemMargin,
      ]}>
      <Animated.View
        style={[
          animStyleContImg,
          styles.imageContainer,
          {
            backgroundColor: itemCircleColor,
          },
        ]}>
        <Animated.Image source={item.image} style={animStyleImg} />
      </Animated.View>
      <Animated.Text
        style={[
          animText,
          styles.label,
          {
            color: labelColor,
          },
        ]}>
        {item.name}
      </Animated.Text>
    </AnimTouch>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    listContainer: {
      padding: DimensionsUtils.getDP(8),
      alignItems: 'center',
      width: 62,
      borderRadius: DimensionsUtils.getDP(36),
      marginRight: DimensionsUtils.getDP(12),
      marginLeft: DimensionsUtils.getDP(8),
      marginVertical: DimensionsUtils.getDP(12),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
    },
    itemMargin: {
      marginLeft: DimensionsUtils.getDP(16),
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: DimensionsUtils.getDP(28),
    },
    label: {
      color: colors.black,
      marginTop: DimensionsUtils.getDP(8),
      marginBottom: DimensionsUtils.getDP(16),
      fontSize: DimensionsUtils.getFontSize(11),
      fontFamily: 'Poppins-SemiBold',
    },
  });

export default CategoriesListItem;
