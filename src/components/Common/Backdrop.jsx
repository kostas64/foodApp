import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {colors} from '../../constants';

const Backdrop = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.orange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Backdrop;
