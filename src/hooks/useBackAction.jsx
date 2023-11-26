import React from 'react';
import {BackHandler, Platform} from 'react-native';

const useBackAction = custonBackAction => {
  if (Platform.OS === 'ios') return;

  React.useEffect(() => {
    const backAction = () => {
      !!custonBackAction && custonBackAction();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
};

export default useBackAction;
