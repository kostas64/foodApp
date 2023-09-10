import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Counter = ({onPressMinus, onPressPlus, counter}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const styles = customStyle(colors);

  const disabled = counter <= 0;

  const backgroundColor = {
    backgroundColor: scheme === 'dark' ? colors.orange : colors.white,
  };

  const label = {
    color: scheme === 'dark' ? colors.black : 'black',
  };

  const tintColor = {
    tintColor: scheme === 'dark' ? colors.black : 'black',
  };

  return (
    <View style={[styles.container, backgroundColor]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPressMinus}
        style={styles.leftContainer}>
        <Image
          source={images.minus}
          style={[styles.icon, tintColor, disabled && {opacity: 0.3}]}
        />
      </TouchableOpacity>
      <View style={styles.numberContainer}>
        <Text style={[styles.number, label]}>{counter}</Text>
      </View>
      <TouchableOpacity onPress={onPressPlus} style={styles.rightContainer}>
        <Image source={images.plus} style={[styles.icon, tintColor]} />
      </TouchableOpacity>
    </View>
  );
};

const customStyle = colors =>
  StyleSheet.create({
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
