import Animated, {
  withSpring,
  withTiming,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';

import Button from '../Common/Button';
import FormInput from '../Common/FormInput';
import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignIn = ({
  widthValue,
  rotateValue,
  isLoginVisible,
  setIsLoginVisible,
}) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const validateEmail = value => {
    const isValid = String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );

    if (value === '' || !!isValid) {
      setErrorEmail(null);
      return;
    } else {
      setErrorEmail('Provide valid email address');
      return;
    }
  };

  const validatePass = password => {
    if (password.length === 0 || password.length >= 8) {
      setErrorPass(null);
      return;
    }

    if (password.length < 8) {
      setErrorPass('Password must be at least 8 characters');
      return;
    }
  };

  const onPressSignUp = () => {
    setEmail('');
    setPassword('');
    setErrorEmail('');
    setErrorPass('');
    setIsLoginVisible(false);

    rotateValue.value = withSpring(180, {
      mass: 1,
      damping: 8,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
    });

    widthValue.value = withTiming(0, {
      duration: 250,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(rotateValue.value, [0, 180], [0, 180]);

    return {
      transform: [{rotateY: `${rotate}deg`}],
    };
  });

  const onPressSignIn = () => {
    let isValid = true;

    if (email.length === 0) {
      setErrorEmail('Provide valid email address');
      isValid = false;
    }

    if (password.length < 8) {
      setErrorPass('Password must be at least 8 characters');
      isValid = false;
    }

    if (errorEmail || errorPass || !isValid) return;

    setEmail('');
    setPassword('');

    navigation.navigate('HomeStack');
  };

  return (
    <>
      {/* Card container */}
      <Animated.View
        style={[
          {
            zIndex: isLoginVisible ? 2 : 1,
          },
          styles.cardContainer,
          animatedStyle,
        ]}>
        {/* Title & Subtitle */}
        <View style={[styles.center, {marginBottom: DimensionsUtils.getDP(8)}]}>
          <Text style={styles.title}>Let's Sign in</Text>
          <Text style={styles.subtitle}>Feel the FooDmE experience</Text>
        </View>

        {/* Inputs */}
        <FormInput
          value={email}
          label={'Email'}
          labelColor={colors.black}
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            setEmail(value);
            validateEmail(value);
          }}
          textContentType="oneTimeCode"
          inputStyle={styles.inputStyle}
          errorMsg={errorEmail}
          errorColor={colors.tomato}
          appendComponent={
            <View style={styles.justifyCenter}>
              <Image
                source={images.correct}
                style={[
                  styles.image,
                  !errorEmail && email.length > 0 && {tintColor: 'green'},
                ]}
              />
            </View>
          }
        />

        {/* Divider */}
        <View style={styles.divider} />

        <FormInput
          value={password}
          label={'Password'}
          labelColor={colors.black}
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={value => {
            setPassword(value);
            validatePass(value);
          }}
          textContentType="oneTimeCode"
          inputStyle={styles.inputStyle}
          errorMsg={errorPass}
          errorColor={colors.tomato}
          appendComponent={
            <Pressable
              onPress={() => setShowPass(!showPass)}
              style={styles.justifyCenter}>
              <Image
                source={showPass ? images.passShow : images.passHide}
                style={styles.image}
              />
            </Pressable>
          }
        />

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate('AskEmail')}>
          <Text style={styles.forgotLabel}>Forgot password</Text>
        </TouchableOpacity>

        {/* Sign In Button + Register */}
        <Button
          onPress={onPressSignIn}
          label={'Sign In'}
          containerStyle={styles.buttonContainer}
        />

        {/* Go to Register */}
        <View style={styles.signUpContainer}>
          <Text style={styles.dontHaveLabel}>{`Dont have an account? `}</Text>
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={onPressSignUp}>
            <Text style={styles.signUpLabel}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
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
    backfaceVisibility: 'hidden',
  },
  title: {
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: DimensionsUtils.getFontSize(24),
  },
  subtitle: {
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getFontSize(16),
    marginVertical: DimensionsUtils.getDP(8),
  },
  image: {
    tintColor: colors.grey,
    width: DimensionsUtils.getDP(20),
    height: DimensionsUtils.getDP(20),
  },
  divider: {
    width: '100%',
    height: DimensionsUtils.getDP(16),
  },
  forgotLabel: {
    alignSelf: 'flex-end',
    marginVertical: DimensionsUtils.getDP(12),
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getDP(12),
  },
  buttonContainer: {
    marginHorizontal: 0,
    borderRadius: DimensionsUtils.getDP(12),
    marginTop: DimensionsUtils.getDP(16),
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: DimensionsUtils.getDP(24),
  },
  dontHaveLabel: {
    fontFamily: 'Poppins-Regular',
  },
  hitSlop: {
    top: DimensionsUtils.getDP(8),
    right: DimensionsUtils.getDP(16),
    bottom: DimensionsUtils.getDP(16),
    left: DimensionsUtils.getDP(16),
  },
  signUpLabel: {
    fontFamily: 'Poppins-Regular',
    color: colors.orange,
    fontWeight: '700',
    textDecorationLine: 'underline',
    top: Platform.OS === 'android' ? -DimensionsUtils.getDP(2) : 0,
  },
  inputStyle: {
    fontFamily: 'Poppins-Regular',
  },
});

export default SignIn;
