import React from 'react';
import {StatusBar} from 'react-native';

const StatusBarManager = ({children}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      {children}
    </>
  );
};

export default StatusBarManager;
