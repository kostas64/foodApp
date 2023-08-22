import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {colors} from '../constants';

const Header = ({leftIcon, rightIcon, label}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={leftIcon} style={styles.image} />
      </View>
      <View style={styles.midContainer}>
        <Text>{label}</Text>
      </View>
      <View>
        <Image source={rightIcon} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 30,
    aspectRatio: 1 / 1,
  },
  midContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});

export default Header;
