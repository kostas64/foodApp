import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

import Logo from '../components/Common/Logo';
import SignUp from '../components/Auth/SignUp';
import SignIn from '../components/Auth/SignIn';
import Screen from '../components/Common/Screen';
import Backdrop from '../components/Common/Backdrop';
import LoginMethods from '../components/Auth/LoginMethods';

const AuthScreen = () => {
  const widthValue = useSharedValue(1);
  const rotateValue = useSharedValue(0);
  const opacitySignUp = useSharedValue(0);
  const opacitySignIn = useSharedValue(1);

  const [backdrop, showBackdrop] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  return (
    <>
      <Screen>
        <View style={styles.flexBetween}>
          <View>
            {/* Logo */}
            <Logo />

            {/* Sign In & Sign Up form */}
            <View>
              <SignIn
                widthValue={widthValue}
                rotateValue={rotateValue}
                isLoginVisible={isLoginVisible}
                setIsLoginVisible={setIsLoginVisible}
                showBackdrop={showBackdrop}
                opacitySignUp={opacitySignUp}
                opacitySignIn={opacitySignIn}
              />
              <SignUp
                widthValue={widthValue}
                rotateValue={rotateValue}
                isLoginVisible={isLoginVisible}
                setIsLoginVisible={setIsLoginVisible}
                showBackdrop={showBackdrop}
                opacitySignUp={opacitySignUp}
                opacitySignIn={opacitySignIn}
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
      {backdrop && <Backdrop />}
    </>
  );
};

const styles = StyleSheet.create({
  flexBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default AuthScreen;
