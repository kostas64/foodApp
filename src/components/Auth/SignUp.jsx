import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Animated, {
  withSpring,
  withTiming,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Button from '../Common/Button';
import FormInput from '../Common/FormInput';
import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('screen');

const SignUp = ({
  widthValue,
  rotateValue,
  isLoginVisible,
  setIsLoginVisible,
}) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [showPass, setShowPass] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorUser, setErrorUser] = useState('');

  const validateUser = value => {
    if (value === '' || username.length >= 8) {
      setErrorUser(null);
      return;
    } else {
      setErrorUser('Username must be at least 8 characters');
      return;
    }
  };

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

  const onPressSignIn = () => {
    setEmail('');
    setPassword('');
    setErrorEmail('');
    setErrorPass('');
    setErrorUser('');
    setIsLoginVisible(true);

    rotateValue.value = withSpring(0, {
      mass: 1,
      damping: 8,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
    });

    widthValue.value = withTiming(1, {
      duration: 250,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(rotateValue.value, [0, 180], [180, 360]);

    return {
      transform: [{rotateY: `${rotate}deg`}],
    };
  });

  const onPressSignUp = () => {
    let isValid = true;

    if (email.length === 0) {
      setErrorEmail('Provide valid email address');
      isValid = false;
    }

    if (password.length < 8) {
      setErrorPass('Password must be at least 8 characters');
      isValid = false;
    }

    if (errorEmail || errorPass || errorUser || !isValid) return;

    setEmail('');
    setPassword('');

    navigation.navigate('HomeStack');

    setTimeout(() => {
      onPressSignIn();
    }, 500);
  };

  return (
    <>
      {/* Card container */}
      <Animated.View
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
          value={email}
          label={'Email'}
          labelColor={colors.black}
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            setEmail(value);
            validateEmail(value);
          }}
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

        {/* Footer */}
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
    position: 'absolute',
    width: WIDTH - DimensionsUtils.getDP(32),
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
    marginVertical: DimensionsUtils.getDP(4),
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
  inputStyle: {
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    marginHorizontal: 0,
    borderRadius: DimensionsUtils.getDP(12),
    marginTop: DimensionsUtils.getDP(32),
  },
  backToContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: DimensionsUtils.getDP(16),
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
  },
  backToLabel: {
    fontFamily: 'Poppins-Regular',
  },
});

export default SignUp;
