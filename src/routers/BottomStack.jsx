import React from 'react';
import {Dimensions, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomBottomTab from '../components/CustomTab/CustomBottomTab';

const Tab = createBottomTabNavigator();
const {height, width} = Dimensions.get('window');

const BottomStack = () => {
  return (
    //Use this Wrapper view to avoid tabbar to be pushed on keyboard open
    <View style={{width, height}}>
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
          component={SearchScreen}
          options={{tabBarLabel: 'Search'}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{tabBarLabel: 'Profile'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomStack;
