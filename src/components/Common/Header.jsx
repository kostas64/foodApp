import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import {colors} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Header = ({
  label,
  leftIcon,
  rightIcon,
  leftIconStyle = {},
  rightIconStyle = {},
  onPressLeft = () => {},
  onPressRight = () => {},
}) => {
  return (
    <View style={styles.container}>
      {leftIcon ? (
        <Pressable onPress={onPressLeft} hitSlop={styles.hitSlop}>
          <Image source={leftIcon} style={[styles.image, leftIconStyle]} />
        </Pressable>
      ) : (
        <View style={[styles.image, leftIconStyle]} />
      )}

      <View style={styles.midContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>

      {rightIcon ? (
        <Pressable onPress={onPressRight} hitSlop={styles.hitSlop}>
          <Image source={rightIcon} style={[styles.image, rightIconStyle]} />
        </Pressable>
      ) : (
        <View style={[styles.image, rightIconStyle]} />
      )}
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
    backgroundColor: colors.orange,
    borderRadius: DimensionsUtils.getDP(32),
    paddingHorizontal: DimensionsUtils.getDP(24),
    paddingVertical: DimensionsUtils.getDP(12),
    elevation: 15,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: colors.orange,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  label: {
    color: colors.white,
    fontFamily: 'Poppins-Medium',
  },
  hitSlop: {
    top: DimensionsUtils.getDP(16),
    bottom: DimensionsUtils.getDP(16),
    left: DimensionsUtils.getDP(16),
    right: DimensionsUtils.getDP(16),
  },
});

export default Header;
