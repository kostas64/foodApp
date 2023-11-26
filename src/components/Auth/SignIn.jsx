import {
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  Pressable,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  withSpring,
  withTiming,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React, {useState} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';

import Button from '../Common/Button';
import {images} from '../../constants';
import FormInput from '../Common/FormInput';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const isIOS = Platform.OS === 'ios';

const SignIn = ({
  widthValue,
  rotateValue,
  isLoginVisible,
  setIsLoginVisible,
  showBackdrop,
  opacitySignUp,
  opacitySignIn,
}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const navigation = useNavigation();
  const styles = customStyle(colors);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const tintColor = scheme === 'dark' ? 'white' : colors.green;

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

  const clear = () => {
    setEmail('');
    setPassword('');
    setErrorEmail('');
    setErrorPass('');
  };

  const onPressSignUp = () => {
    clear();
    setIsLoginVisible(false);
    Keyboard.dismiss();

    animateOpacity();
    animateRotation();
  };

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(rotateValue.value, [0, 180], [0, 180]);

    return {
      opacity: opacitySignIn.value,
      transform: [{rotateY: `${rotate}deg`}],
    };
  });

  const onPressForgot = () => {
    clear();
    navigation.navigate('AskEmail');
  };

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

    clear();
    Keyboard.dismiss();
    showBackdrop(true);

    setTimeout(() => {
      showBackdrop(false);
      navigation.navigate('HomeStack');
    }, 1500);
  };

  const animateOpacity = () => {
    opacitySignIn.value = withTiming(0, {duration: 150});
    opacitySignUp.value = withTiming(1);
  };

  const animateRotation = () => {
    rotateValue.value = withSpring(180, {
      mass: 1,
      damping: 10,
      stiffness: 180,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
    });

    widthValue.value = withTiming(0, {
      duration: 250,
    });
  };

  return (
    <>
      {/* Card container */}
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps={'handled'}
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
          inputStyle={isIOS ? styles.inputStyle : {}}
          errorMsg={errorEmail}
          errorColor={colors.tomato}
          appendComponent={
            <View style={styles.justifyCenter}>
              <Image
                source={images.correct}
                style={[
                  styles.image,
                  !errorEmail && email.length > 0 && {tintColor},
                ]}
              />
            </View>
          }
        />

        {/* Divider */}
        <View style={styles.divider} />

        <FormInput
          enterKeyHint={'done'}
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
          inputStyle={isIOS ? styles.inputStyle : {}}
          errorMsg={errorPass}
          errorColor={colors.tomato}
          onSubmitEditing={onPressSignIn}
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
        <TouchableOpacity style={styles.selfEnd} onPress={onPressForgot}>
          <Text style={styles.forgotLabel}>Forgot password</Text>
        </TouchableOpacity>

        {/* Sign In Button + Register */}
        <Button
          label={'Sign In'}
          onPress={onPressSignIn}
          containerStyle={styles.buttonContainer}
        />

        {/* Go to Register */}
        <View style={styles.signUpContainer}>
          <Text style={styles.dontHaveLabel}>{`Dont have an account? `}</Text>
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={onPressSignUp}>
            <Text style={styles.signUpLabel}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    center: {
      alignItems: 'center',
    },
    selfEnd: {
      alignSelf: 'flex-end',
    },
    justifyCenter: {
      justifyContent: 'center',
      paddingLeft: DimensionsUtils.getDP(8),
    },
    cardContainer: {
      borderRadius: DimensionsUtils.getDP(16),
      marginTop: DimensionsUtils.getDP(16),
      paddingTop: DimensionsUtils.getDP(16),
      paddingBottom: DimensionsUtils.getDP(10),
      paddingHorizontal: DimensionsUtils.getDP(16),
      marginHorizontal: DimensionsUtils.getDP(16),
      backgroundColor: colors.white,
    },
    title: {
      color: colors.black,
      fontFamily: 'Poppins-SemiBold',
      fontSize: DimensionsUtils.getFontSize(20),
    },
    subtitle: {
      color: colors.black,
      fontFamily: 'Poppins-Regular',
    },
    image: {
      tintColor: colors.grey,
      width: DimensionsUtils.getDP(16),
      height: DimensionsUtils.getDP(16),
    },
    divider: {
      width: '100%',
      height: DimensionsUtils.getDP(16),
    },
    forgotLabel: {
      color: colors.black,
      alignSelf: 'flex-end',
      marginVertical: DimensionsUtils.getDP(8),
      textDecorationLine: 'underline',
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getDP(12),
    },
    buttonContainer: {
      marginHorizontal: 0,
      borderRadius: DimensionsUtils.getDP(12),
      marginTop: DimensionsUtils.getDP(8),
    },
    signUpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: DimensionsUtils.getDP(12),
    },
    dontHaveLabel: {
      color: colors.black,
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
      top: !isIOS ? -DimensionsUtils.getDP(3) : 0,
    },
    inputStyle: {
      fontFamily: 'Poppins-Regular',
    },
  });

export default SignIn;
