import {
  View,
  Text,
  Platform,
  Keyboard,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React, {useEffect, useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useIsFocused, useNavigation, useTheme} from '@react-navigation/native';

import Logo from '../components/Common/Logo';
import {useKeyboard} from '../hooks/useKeyboard';
import Screen from '../components/Common/Screen';
import Backdrop from '../components/Common/Backdrop';
import FormInput from '../components/Common/FormInput';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const isAndroid = Platform.OS === 'android';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Box = ({value}) => {
  const {colors} = useTheme();
  const styles = customStyle(colors);

  return (
    <View style={styles.boxContainer}>
      <Text style={styles.boxLabel}>{value}</Text>
    </View>
  );
};

const TypeOtp = () => {
  const {colors} = useTheme();
  const styles = customStyle(colors);
  const keyboard = useKeyboard();
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const translate = useSharedValue(0);
  const [backdrop, showBackdrop] = useState(false);
  const [secodsToResend, setSecondsToResend] = useState(59);

  const otpRef = useRef();
  const [otp, setOtp] = useState('');

  const paddingBottom = {
    paddingBottom:
      insets.bottom > 0
        ? insets.bottom + DimensionsUtils.getDP(8)
        : DimensionsUtils.getDP(24),
  };

  const seconds =
    secodsToResend > 0
      ? `(00:${secodsToResend >= 10 ? secodsToResend : `0${secodsToResend}`})`
      : '';

  translate.value = withTiming(-keyboard, {
    duration: 100,
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translate.value}],
    };
  });

  const openKeyboard = () => {
    isAndroid && otpRef.current.blur();
    otpRef.current.focus();
  };

  useEffect(() => {
    const secsInterval = setInterval(() => {
      setSecondsToResend(oldSecs => oldSecs - 1);
    }, 1000);

    return () => clearInterval(secsInterval);
  }, [secodsToResend]);

  useEffect(() => {
    if (otp.length === 4) {
      Keyboard.dismiss();
      showBackdrop(true);

      setTimeout(() => {
        setOtp('');
        showBackdrop(false);

        navigation.navigate('ChangePassword');
      }, 2000);
    } else if (isFocused) {
      otpRef.current.focus();
    }
  }, [otp, isFocused]);

  return (
    <>
      <Screen>
        {/* Logo */}
        <Logo />

        <Pressable onPress={openKeyboard} style={styles.container}>
          {/* Hidden input */}
          <FormInput
            ref={otpRef}
            value={otp}
            onChange={value => {
              const regex = /^[0-9]*$/;

              //Type safe for Android
              if (regex.test(value)) {
                setOtp(value);
              }
            }}
            maxLength={4}
            containerStyle={styles.hiddenInput}
            keyboardType={'number-pad'}
          />
          {/* Boxes */}
          <View style={styles.boxesContainer}>
            {new Array(4).fill('').map((_, index) => (
              <Box key={index} value={otp.charAt(index)} />
            ))}
          </View>

          {/* Resend Code button */}
          <AnimatedTouchable
            style={[styles.resendCodeContainer, paddingBottom, animatedStyle]}
            disabled={secodsToResend > 0}
            onPress={() => setSecondsToResend(59)}>
            <Text
              style={styles.resendCodeLabel}>{`Resend Code ${seconds}`}</Text>
          </AnimatedTouchable>
        </Pressable>
      </Screen>
      {backdrop && <Backdrop />}
    </>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: DimensionsUtils.getDP(32),
      justifyContent: 'space-between',
    },
    hiddenInput: {
      position: 'absolute',
      top: -10000,
    },
    boxesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    boxContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: DimensionsUtils.getDP(55),
      height: DimensionsUtils.getDP(55),
      marginTop: DimensionsUtils.getDP(8),
      borderRadius: DimensionsUtils.getDP(12),
      paddingHorizontal: DimensionsUtils.getDP(20),
      backgroundColor: colors.lightGrey,
      borderColor: colors.grey,
      borderWidth: 1,
    },
    boxLabel: {
      color: colors.black,
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getFontSize(16),
    },
    resendCodeContainer: {
      alignSelf: 'center',
      paddingTop: DimensionsUtils.getDP(32),
    },
    resendCodeLabel: {
      fontFamily: 'Poppins-Medium',
      color: colors.orange,
    },
  });

export default TypeOtp;
