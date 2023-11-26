import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomStack from './BottomStack';
import TypeOtp from '../screens/TypeOtp';
import AskEmail from '../screens/AskEmail';
import MapScreen from '../screens/MapScreen';
import ShopScreen from '../screens/ShopScreen';
import CardScreen from '../screens/CardScreen';
import AuthScreen from '../screens/AuthScreen';
import ChangePassword from '../screens/ChangePassword';

const Stack = createNativeStackNavigator();

const slideFromBottom = {
  animation: 'slide_from_bottom',
};

const popReplaceOptions = {
  animationTypeForReplace: 'pop',
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="AskEmail" component={AskEmail} />
      <Stack.Screen name="TypeOtp" component={TypeOtp} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen
        name="HomeStack"
        component={BottomStack}
        options={popReplaceOptions}
      />
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen
        name="Card"
        component={CardScreen}
        options={slideFromBottom}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={slideFromBottom}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
