import React, {useState} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {View, Text, Image, StyleSheet} from 'react-native';

import {colors, images} from '../constants';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import Screen from '../components/Common/Screen';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import LoginMethods from '../components/Auth/LoginMethods';

const AuthScreen = () => {
  const widthValue = useSharedValue(1);
  const rotateValue = useSharedValue(0);
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  return (
    <Screen>
      <View style={styles.flexBetween}>
        <View>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={images.logo} style={styles.logo} />
            <Text style={styles.appName}>FooDmE</Text>
          </View>

          {/* Sign In & Sign Up form */}
          <View>
            <SignIn
              widthValue={widthValue}
              rotateValue={rotateValue}
              isLoginVisible={isLoginVisible}
              setIsLoginVisible={setIsLoginVisible}
            />
            <SignUp
              widthValue={widthValue}
              rotateValue={rotateValue}
              isLoginVisible={isLoginVisible}
              setIsLoginVisible={setIsLoginVisible}
            />
          </View>
        </View>

        {/* Footer */}
        <LoginMethods
          widthValue={widthValue}
          rotateValue={rotateValue}
          isLoginVisible={isLoginVisible}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  flexBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    marginRight: DimensionsUtils.getDP(16),
    width: DimensionsUtils.getDP(58),
    height: DimensionsUtils.getDP(64),
  },
  appName: {
    color: colors.orange,
    fontFamily: 'Poppins-Bold',
    fontSize: DimensionsUtils.getFontSize(28),
  },
});

export default AuthScreen;
