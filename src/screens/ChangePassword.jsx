import {
  View,
  Text,
  Image,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import {colors, images} from '../constants';
import Logo from '../components/Common/Logo';
import Screen from '../components/Common/Screen';
import Button from '../components/Common/Button';
import Backdrop from '../components/Common/Backdrop';
import FormInput from '../components/Common/FormInput';
import {useNavigation} from '@react-navigation/native';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const isIOS = Platform.OS === 'ios';

const ChangePassword = () => {
  const navigation = useNavigation();

  const [backdrop, showBackdrop] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);
  const [errorPass, setErrorPass] = useState('');
  const [errorRepeatPass, setErrorRepeatPass] = useState('');

  const validatePass = (value, cb) => {
    if (value.length === 0 || value.length >= 8) {
      cb(null);
      return;
    }

    if (value.length < 8) {
      cb('Password must be at least 8 characters');
      return;
    }
  };

  const onPressChangePass = () => {
    let isValid = true;

    if (password.length < 8) {
      setErrorPass('Password must be at least 8 characters');
      isValid = false;
    }

    if (repeatPassword.length < 8) {
      setErrorRepeatPass('Password must be at least 8 characters');
      isValid = false;
    }

    if (!isValid) return;

    if (password !== repeatPassword) {
      setErrorRepeatPass('Passwords must match');
      return;
    }

    Keyboard.dismiss();
    showBackdrop(true);

    setTimeout(() => {
      navigation.popToTop();
    }, 1500);
  };

  return (
    <>
      <Screen>
        {/* Logo */}
        <Logo />

        {/*Card container */}
        <View style={styles.cardContainer}>
          {/* Title  */}
          <View
            style={[styles.center, {marginBottom: DimensionsUtils.getDP(8)}]}>
            <Text style={styles.title}>Change password</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          <FormInput
            containerStyle={styles.innerCardWidth}
            value={password}
            label={'New password'}
            labelColor={colors.black}
            secureTextEntry={!showPass}
            autoCompleteType="password"
            onChange={value => {
              setPassword(value);
              validatePass(value, setErrorPass);
            }}
            inputStyle={isIOS ? styles.inputStyle : {}}
            textContentType="oneTimeCode"
            errorMsg={errorPass}
            errorColor={colors.tomato}
            appendComponent={
              <Pressable
                onPress={() => setShowPass(!showPass)}
                style={styles.justifyCenter}>
                <Image
                  source={showPass ? images.passShow : images.passHide}
                  style={[styles.image]}
                />
              </Pressable>
            }
          />

          {/* Divider */}
          <View style={styles.divider} />

          <FormInput
            containerStyle={styles.innerCardWidth}
            value={repeatPassword}
            label={'Repeat new password'}
            labelColor={colors.black}
            secureTextEntry={!showRepeatPass}
            autoCompleteType="password"
            onChange={value => {
              setRepeatPassword(value);
              validatePass(value, setErrorRepeatPass);
            }}
            inputStyle={isIOS ? styles.inputStyle : {}}
            textContentType="oneTimeCode"
            errorMsg={errorRepeatPass}
            errorColor={colors.tomato}
            appendComponent={
              <Pressable
                onPress={() => setShowRepeatPass(!showRepeatPass)}
                style={styles.justifyCenter}>
                <Image
                  source={showRepeatPass ? images.passShow : images.passHide}
                  style={[styles.image]}
                />
              </Pressable>
            }
          />

          {/* Divider */}
          <View style={styles.divider} />

          {/* Change password button */}
          <Button
            onPress={onPressChangePass}
            label={'Change password'}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </Screen>
      {backdrop && <Backdrop />}
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    alignSelf: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  cardContainer: {
    borderRadius: DimensionsUtils.getDP(16),
    marginTop: DimensionsUtils.getDP(16),
    paddingVertical: DimensionsUtils.getDP(16),
    paddingHorizontal: DimensionsUtils.getDP(16),
    marginHorizontal: DimensionsUtils.getDP(16),
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: DimensionsUtils.getFontSize(24),
  },
  subtitle: {
    textAlign: 'center',
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getFontSize(16),
    marginVertical: DimensionsUtils.getDP(4),
  },
  divider: {
    width: '100%',
    height: DimensionsUtils.getDP(16),
  },
  image: {
    tintColor: colors.grey,
    width: DimensionsUtils.getDP(20),
    height: DimensionsUtils.getDP(20),
  },
  buttonContainer: {
    marginHorizontal: 0,
    borderRadius: DimensionsUtils.getDP(12),
    marginTop: DimensionsUtils.getDP(16),
  },
  inputStyle: {
    fontFamily: 'Poppins-Regular',
  },
});

export default ChangePassword;
