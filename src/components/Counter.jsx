import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {colors, images} from '../constants';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const Counter = ({onPressMinus, onPressPlus, counter}) => {
  const disabled = counter <= 1;
  const tintColor = disabled ? colors.grey : colors.black;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPressMinus}
        style={styles.leftContainer}>
        <Image source={images.minus} style={[styles.icon, {tintColor}]} />
      </TouchableOpacity>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{counter}</Text>
      </View>
      <TouchableOpacity onPress={onPressPlus} style={styles.rightContainer}>
        <Image source={images.plus} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: DimensionsUtils.getDP(24),
  },
  leftContainer: {
    paddingVertical: DimensionsUtils.getDP(16),
    paddingLeft: DimensionsUtils.getDP(16),
    paddingRight: DimensionsUtils.getDP(20),
  },
  numberContainer: {
    width: DimensionsUtils.getDP(22),
    alignItems: 'center',
  },
  rightContainer: {
    paddingLeft: DimensionsUtils.getDP(20),
    paddingRight: DimensionsUtils.getDP(16),
    paddingVertical: DimensionsUtils.getDP(16),
  },
  number: {
    fontFamily: 'Poppins-Medium',
    fontSize: DimensionsUtils.getFontSize(18),
  },
  icon: {
    width: DimensionsUtils.getDP(12),
    height: DimensionsUtils.getDP(12),
  },
});

export default Counter;
