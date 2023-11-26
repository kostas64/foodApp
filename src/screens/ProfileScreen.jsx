import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Screen from '../components/Common/Screen';
import useBackAction from '../hooks/useBackAction';

const ProfileScreen = () => {
  useBackAction();

  return (
    <Screen>
      <Text>ProfileScreen</Text>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
