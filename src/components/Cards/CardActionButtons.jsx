import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, View, Image, Pressable} from 'react-native';

import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const CardActionButtons = ({onPressDelete = () => {}}) => {
  const {colors} = useTheme();
  const styles = customStyle(colors);

  return (
    <Pressable
      style={styles.flex}
      hitSlop={styles.hitSlop}
      onPress={card => onPressDelete(card)}>
      <View style={[styles.iconWrapper, {backgroundColor: 'white'}]}>
        <Image source={images.trash} style={styles.icon} />
      </View>
    </Pressable>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    flex: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.grey,
      width: DimensionsUtils.getDP(66),
      borderTopLeftRadius: DimensionsUtils.getDP(8),
      borderBottomLeftRadius: DimensionsUtils.getDP(8),
    },
    iconWrapper: {
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
