import React from 'react';
import Animated from 'react-native-reanimated';
import {StyleSheet, View, Pressable} from 'react-native';

import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const CardActionButtons = ({
  scaleStyle,
  onPressEdit = () => {},
  onPressDelete = () => {},
}) => {
  return (
    <View style={[styles.container]}>
      <Pressable hitSlop={styles.hitSlop} onPress={card => onPressEdit(card)}>
        <Animated.Image
          source={images.pencil}
          style={[styles.icon, scaleStyle]}
        />
      </Pressable>
      <Pressable hitSlop={styles.hitSlop} onPress={card => onPressDelete(card)}>
        <Animated.Image
          source={images.trash}
          style={[styles.icon, scaleStyle]}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: DimensionsUtils.getDP(12),
  },
  icon: {
    tintColor: colors.orange,
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
  hitSlop: {
    top: DimensionsUtils.getDP(12),
    left: DimensionsUtils.getDP(32),
    right: DimensionsUtils.getDP(0),
    bottom: DimensionsUtils.getDP(12),
  },
});

export default CardActionButtons;
