import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CustomBottomTab from '../components/CustomTab/CustomBottomTab';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomBottomTab {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{tabBarLabel: 'Search'}}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
