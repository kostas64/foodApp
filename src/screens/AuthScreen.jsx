import React, {useState} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {View, Text, Image, StyleSheet} from 'react-native';

import {colors, images} from '../constants';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import Screen from '../components/Common/Screen';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const AuthScreen = () => {
  const rotateValue = useSharedValue(0);
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  return (
    <Screen>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.appName}>FooDmE</Text>
      </View>

      {/* Sign In & Sign Up form */}
      <View>
        <SignIn
          rotateValue={rotateValue}
          isLoginVisible={isLoginVisible}
          setIsLoginVisible={setIsLoginVisible}
        />
        <SignUp
          rotateValue={rotateValue}
          isLoginVisible={isLoginVisible}
          setIsLoginVisible={setIsLoginVisible}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    marginRight: DimensionsUtils.getDP(16),
    width: DimensionsUtils.getDP(64),
    height: DimensionsUtils.getDP(72),
  },
  appName: {
    color: colors.orange,
    fontFamily: 'Poppins-Bold',
    fontSize: DimensionsUtils.getFontSize(28),
  },
});

export default AuthScreen;
