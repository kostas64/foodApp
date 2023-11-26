import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Button = ({
  label,
  onPress,
  iconLeft,
  inputStyle,
  buttonPressed,
  containerStyle,
  noBorderRadius,
}) => {
  const {colors} = useTheme();
  const styles = customStyle(colors);

  const buttonStyle = [
    styles.buttonContainer,
    containerStyle,
    buttonPressed && {opacity: 0.6},
    noBorderRadius && {borderRadius: 0},
  ];

  return (
    <TouchableOpacity
      disabled={buttonPressed}
      onPress={onPress}
      style={buttonStyle}>
      {buttonPressed ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <View style={styles.iconLabelContainer}>
          {iconLeft && <Image source={iconLeft} style={styles.iconLeft} />}
          <Text style={[styles.buttonLabel, inputStyle]}>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    buttonContainer: {
      height: DimensionsUtils.getDP(50),
      backgroundColor: colors.orange,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: DimensionsUtils.getDP(16),
    },
    buttonLabel: {
      color: 'white',
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getFontSize(16),
    },
    iconLabelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconLeft: {
      tintColor: 'white',
      width: DimensionsUtils.getDP(16),
      height: DimensionsUtils.getDP(16),
      marginRight: DimensionsUtils.getDP(16),
    },
  });

export default Button;
