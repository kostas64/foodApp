import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

import Logo from '../components/Common/Logo';
import SignUp from '../components/Auth/SignUp';
import SignIn from '../components/Auth/SignIn';
import Screen from '../components/Common/Screen';
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
          <Logo />

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
});

export default AuthScreen;
