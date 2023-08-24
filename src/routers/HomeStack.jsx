import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomStack from './BottomStack';
import ShopScreen from '../screens/ShopScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeStack" component={BottomStack} />
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
