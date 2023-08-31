import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import {colors} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Button = ({iconLeft, buttonPressed, label, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      disabled={buttonPressed}
      onPress={onPress}
      style={[
        styles.buttonContainer,
        containerStyle,
        buttonPressed && {opacity: 0.6},
      ]}>
      {buttonPressed ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <View style={styles.iconLabelContainer}>
          {iconLeft && <Image source={iconLeft} style={styles.iconLeft} />}
          <Text style={styles.buttonLabel}>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: DimensionsUtils.getDP(50),
    marginHorizontal: DimensionsUtils.getDP(20),
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DimensionsUtils.getDP(16),
  },
  buttonLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getFontSize(18),
    color: colors.white,
  },
  iconLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    tintColor: colors.white,
    width: DimensionsUtils.getDP(18),
    height: DimensionsUtils.getDP(18),
    marginRight: DimensionsUtils.getDP(16),
  },
});

export default Button;
