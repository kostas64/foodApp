import {
  View,
  Text,
  Image,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
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
import FormInput from '../Common/FormInput';
import {images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const isIOS = Platform.OS === 'ios';
const EMAIL_REG =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp = ({
  widthValue,
  rotateValue,
  isLoginVisible,
  setIsLoginVisible,
  showBackdrop,
  opacitySignUp,
  opacitySignIn,
}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const styles = customStyle(colors);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [showPass, setShowPass] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorUser, setErrorUser] = useState('');

  const validateUser = value => {
    if (username.length >= 8) {
      setErrorUser(null);
      return;
    } else {
      setErrorUser('Username must be at least 8 characters');
      return;
    }
  };

  const validateEmail = value => {
    const isValid = String(value).toLowerCase().match(EMAIL_REG);

    if (!!isValid) {
      setErrorEmail(null);
      return true;
    } else {
      setErrorEmail('Provide valid email address');
      return false;
    }
  };

  const validatePass = password => {
    if (password.length < 8) {
      setErrorPass('Password must be at least 8 characters');
      return false;
    }

    return true;
  };

  const onPressSignIn = () => {
    setEmail('');
    setPassword('');
    setUsername('');
    setErrorEmail('');
    setErrorPass('');
    setErrorUser('');
    setIsLoginVisible(true);

    animateOpacity();
    animateRotation();
  };

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(rotateValue.value, [0, 180], [180, 360]);

    return {
      opacity: opacitySignUp.value,
      transform: [{rotateY: `${rotate}deg`}],
    };
  });

  const animateOpacity = () => {
    opacitySignIn.value = withTiming(1);
    opacitySignUp.value = withTiming(0, {duration: 150});
  };

  const animateRotation = () => {
    rotateValue.value = withSpring(0, {
      mass: 1,
      damping: 10,
      stiffness: 180,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
    });

    widthValue.value = withTiming(1, {
      duration: 250,
    });
  };

  const onPressSignUp = () => {
    let isValidEmail, isValidPass, isValidUser;

    isValidEmail = validateEmail(email);
    isValidPass = validatePass(password);
    isValidUser = validateUser(username);

    if (!isValidUser || !isValidEmail || !isValidPass) return;

    setEmail('');
    setUsername('');
    setPassword('');
    showBackdrop(true);
    Keyboard.dismiss();

    setTimeout(() => {
      showBackdrop(false);
      navigation.navigate('HomeStack');
    }, 1500);

    setTimeout(() => {
      onPressSignIn();
    }, 2000);
  };

  return (
    <>
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps={'handled'}
        style={[
          {
            zIndex: isLoginVisible ? 1 : 2,
          },
          styles.cardContainer,
          animatedStyle,
        ]}>
        {/* Title & Subtitle */}
        <View style={[styles.center, {marginBottom: DimensionsUtils.getDP(8)}]}>
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.subtitle}>Feel the FooDmE experience</Text>
        </View>

        {/* Inputs */}
        <FormInput
          value={username}
          label={'Username'}
          labelColor={colors.black}
          keyboardType="default"
          autoCompleteType="none"
          onChange={value => {
            setUsername(value);
            validateUser(value);
          }}
          textContentType="oneTimeCode"
          inputStyle={isIOS ? styles.inputStyle : {}}
          errorMsg={errorUser}
          errorColor={colors.tomato}
          appendComponent={
            <View style={styles.justifyCenter}>
              <Image
                source={images.correct}
                style={[
                  styles.image,
                  !errorUser &&
                    username.length > 0 && {tintColor: colors.green},
                ]}
              />
            </View>
          }
        />

        {/* Divider */}
        <View style={styles.divider} />

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
                  !errorEmail && email.length > 0 && {tintColor: colors.green},
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
          inputStyle={isIOS ? styles.inputStyle : {}}
          errorMsg={errorPass}
          errorColor={colors.tomato}
          onSubmitEditing={onPressSignUp}
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

        {/* Sign Up Button */}
        <Button
          onPress={onPressSignUp}
          label={'Sign Up'}
          containerStyle={styles.buttonContainer}
        />

        {/* Go to Login */}
        <View style={styles.backToContainer}>
          <Text style={styles.backToLabel}>Back to </Text>
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={onPressSignIn}>
            <Text style={styles.loginLabel}>Login</Text>
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
      position: 'absolute',
      width: sizes.WIDTH - DimensionsUtils.getDP(32),
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
      height: DimensionsUtils.getDP(12),
    },
    inputStyle: {
      fontFamily: 'Poppins-Regular',
    },
    buttonContainer: {
      marginHorizontal: 0,
      borderRadius: DimensionsUtils.getDP(12),
      marginTop: DimensionsUtils.getDP(24),
    },
    backToContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: DimensionsUtils.getDP(12),
    },
    hitSlop: {
      top: DimensionsUtils.getDP(8),
      right: DimensionsUtils.getDP(16),
      bottom: DimensionsUtils.getDP(16),
      left: DimensionsUtils.getDP(16),
    },
    loginLabel: {
      fontFamily: 'Poppins-Regular',
      color: colors.orange,
      fontWeight: '700',
      textDecorationLine: 'underline',
      top: !isIOS ? -DimensionsUtils.getDP(3) : 0,
    },
    backToLabel: {
      color: colors.black,
      fontFamily: 'Poppins-Regular',
    },
  });

export default SignUp;
