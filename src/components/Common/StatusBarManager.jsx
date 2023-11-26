import React from 'react';
import {StatusBar} from 'react-native';

export const setBarStyle = barStyle => StatusBar.setBarStyle(barStyle);

const StatusBarManager = ({children}) => {
  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      {children}
    </>
  );
};

export default StatusBarManager;
