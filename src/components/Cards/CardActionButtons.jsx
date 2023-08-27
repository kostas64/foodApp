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
    <View style={styles.container}>
      <Pressable onPress={card => onPressEdit(card)}>
        <Animated.Image
          source={images.pencil}
          style={[styles.pencil, scaleStyle]}
        />
      </Pressable>
      <Pressable onPress={card => onPressDelete(card)}>
        <Animated.Image
          source={images.trash}
          style={[styles.trash, scaleStyle]}
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
  pencil: {
    tintColor: colors.orange,
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
  trash: {
    tintColor: colors.black,
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
});

export default CardActionButtons;
