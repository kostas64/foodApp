import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import HomeStack from './src/routers/HomeStack';
import {darkColors, lightColors} from './src/theme/colors';
import StatusBarManager from './src/components/Common/StatusBarManager';

const App = () => {
  const scheme = useColorScheme();

  const MyTheme =
    scheme === 'dark'
      ? {
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            ...darkColors,
          },
        }
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            ...lightColors,
          },
        };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBarManager>
        <NavigationContainer theme={MyTheme}>
          <HomeStack />
        </NavigationContainer>
      </StatusBarManager>
    </GestureHandlerRootView>
  );
};

export default App;
