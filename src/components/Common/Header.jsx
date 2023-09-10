import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Header = ({
  label,
  leftIcon,
  rightIcon,
  isLeftPressDisabled = false,
  isRightPressDisabled = false,
  leftIconStyle = {},
  rightIconStyle = {},
  onPressLeft = () => {},
  onPressRight = () => {},
}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();

  const iconColor = {
    tintColor: scheme === 'dark' ? colors.orange : colors.black,
  };

  const color =
    scheme === 'light'
      ? {
          shadowColor: colors.orange,
          backgroundColor: colors.orange,
        }
      : {
          shadowColor: colors.lightGrey,
          backgroundColor: colors.lightGrey,
        };

  return (
    <View style={styles.container}>
      {leftIcon ? (
        <Pressable
          disabled={isLeftPressDisabled}
          onPress={onPressLeft}
          hitSlop={styles.hitSlop}>
          <Image
            source={leftIcon}
            style={[styles.image, iconColor, leftIconStyle]}
          />
        </Pressable>
      ) : (
        <View style={[styles.image, leftIconStyle]} />
      )}

      <View style={[styles.midContainer, color]}>
        <Text style={styles.label}>{label}</Text>
      </View>

      {rightIcon ? (
        <Pressable
          onPress={onPressRight}
          hitSlop={styles.hitSlop}
          disabled={isRightPressDisabled}>
          <Image
            source={rightIcon}
            style={[styles.image, iconColor, rightIconStyle]}
          />
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
    borderRadius: DimensionsUtils.getDP(32),
    paddingHorizontal: DimensionsUtils.getDP(24),
    paddingVertical: DimensionsUtils.getDP(12),
    elevation: 15,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  label: {
    color: 'white',
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
