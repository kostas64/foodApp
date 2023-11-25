import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import Button from '../Common/Button';
import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const LoginMethods = ({widthValue}) => {
  const {colors} = useTheme();
  const styles = customStyle(colors);
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: widthValue.value,
    transform: [{translateY: widthValue.value * -4}],
  }));

  return (
    <>
      {/* Footer */}
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={[{height: insets.bottom + 54}, styles.buttonContainer]}>
          <Button
            noBorderRadius
            iconLeft={images.facebook}
            label={'Facebook login'}
            containerStyle={[styles.button1]}
            inputStyle={{fontSize: DimensionsUtils.getFontSize(14)}}
          />
        </View>
        <View style={[{height: insets.bottom + 54}, styles.buttonContainer]}>
          <Button
            noBorderRadius
            iconLeft={images.google}
            label={'Google login'}
            containerStyle={[styles.button2]}
            inputStyle={{fontSize: DimensionsUtils.getFontSize(14)}}
          />
        </View>
      </Animated.View>
    </>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    buttonContainer: {
      width: '50%',
      bottom: -4,
    },
    button1: {
      backgroundColor: '#0d59ad',
      flex: 1,
      marginHorizontal: 0,
    },
    button2: {
      flex: 1,
      backgroundColor: colors.grey,
      marginHorizontal: 0,
    },
  });

export default LoginMethods;
