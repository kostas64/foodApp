import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import {colors} from '../constants';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const Header = ({
  label,
  leftIcon,
  rightIcon,
  onPressLeft = () => {},
  onPressRight = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressLeft}>
        <Image source={leftIcon} style={styles.image} />
      </Pressable>
      <View style={styles.midContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Pressable onPress={onPressRight}>
        <Image source={rightIcon} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: DimensionsUtils.getDP(20),
  },
  image: {
    height: DimensionsUtils.getDP(26),
    aspectRatio: 1 / 1,
  },
  midContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: DimensionsUtils.getDP(32),
    paddingHorizontal: DimensionsUtils.getDP(24),
    paddingVertical: DimensionsUtils.getDP(12),
  },
  label: {
    fontFamily: 'Poppins-Medium',
  },
});

export default Header;
