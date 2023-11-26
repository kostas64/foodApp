import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

export const setBarStyle = barStyle => StatusBar.setBarStyle(barStyle);

const StatusBarManager = ({children}) => {
  const scheme = useColorScheme();

  React.useEffect(() => {
    StatusBar.setBarStyle(
      scheme === 'light' ? 'dark-content' : 'light-content',
    );
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      {children}
    </>
  );
};

export default StatusBarManager;
