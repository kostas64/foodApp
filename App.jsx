import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import HomeStack from './src/routers/HomeStack';
import StatusBarManager from './src/components/Common/StatusBarManager';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBarManager>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </StatusBarManager>
    </GestureHandlerRootView>
  );
};

export default App;
