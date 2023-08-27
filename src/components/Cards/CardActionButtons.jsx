import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';

import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const CardActionButtons = ({onPressDelete = () => {}}) => {
  return (
    <Pressable
      style={styles.flex}
      hitSlop={styles.hitSlop}
      onPress={card => onPressDelete(card)}>
      <View style={styles.iconWrapper}>
        <Image source={images.trash} style={styles.icon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  flex: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    height: DimensionsUtils.getDP(66),
    width: DimensionsUtils.getDP(66),
    borderTopLeftRadius: DimensionsUtils.getDP(8),
    borderBottomLeftRadius: DimensionsUtils.getDP(8),
  },
  iconWrapper: {
    backgroundColor: colors.white,
    borderRadius: DimensionsUtils.getDP(6),
    padding: DimensionsUtils.getDP(6),
  },
  icon: {
    tintColor: colors.orange,
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
  hitSlop: {
    top: DimensionsUtils.getDP(12),
    left: DimensionsUtils.getDP(14),
    right: DimensionsUtils.getDP(16),
    bottom: DimensionsUtils.getDP(20),
  },
});

export default CardActionButtons;
