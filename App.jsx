import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomTab from './src/components/BottomTab';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </>
  );
};

export default App;
