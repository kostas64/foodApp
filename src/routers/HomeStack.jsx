import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomStack from './BottomStack';
import ShopScreen from '../screens/ShopScreen';
import CardScreen from '../screens/CardScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

const slideFromBottom = {
  animation: 'slide_from_bottom',
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeStack" component={BottomStack} />
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
