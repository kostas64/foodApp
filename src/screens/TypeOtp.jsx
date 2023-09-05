import {
  View,
  Text,
  Keyboard,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {colors} from '../constants';
import Logo from '../components/Common/Logo';
import Screen from '../components/Common/Screen';
import Backdrop from '../components/Common/Backdrop';
import FormInput from '../components/Common/FormInput';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const Box = ({value}) => (
  <View style={styles.boxContainer}>
    <Text style={styles.boxLabel}>{value}</Text>
  </View>
);

const TypeOtp = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [backdrop, showBackdrop] = useState(false);
  const [secodsToResend, setSecondsToResend] = useState(59);

  const otpRef = useRef();
  const [otp, setOtp] = useState('');

  const seconds =
    secodsToResend > 0
      ? `(00:${secodsToResend >= 10 ? secodsToResend : `0${secodsToResend}`})`
      : '';

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

        <Pressable
          onPress={() => otpRef.current.focus()}
          style={styles.container}>
          {/* Hidden input */}
          <FormInput
            ref={otpRef}
            autoFocus
            value={otp}
            onChange={setOtp}
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
          <TouchableOpacity
            style={styles.resendCodeContainer}
            disabled={secodsToResend > 0}
            onPress={() => setSecondsToResend(59)}>
            <Text
              style={styles.resendCodeLabel}>{`Resend Code ${seconds}`}</Text>
          </TouchableOpacity>
        </Pressable>
      </Screen>
      {backdrop && <Backdrop />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: DimensionsUtils.getDP(32),
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
  },
  boxLabel: {
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
