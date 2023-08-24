import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeStack from './src/routers/HomeStack';
import StatusBarManager from './src/components/Common/StatusBarManager';

const App = () => {
  return (
    <StatusBarManager>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </StatusBarManager>
  );
};

export default App;
