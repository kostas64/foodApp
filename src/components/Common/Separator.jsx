import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors, sizes} from '../../constants';

const Separator = ({width = sizes.WIDTH}) => {
  return <View style={[styles.separator, {width}]} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    alignSelf: 'flex-end',
    backgroundColor: colors.grey,
  },
});

export default Separator;
