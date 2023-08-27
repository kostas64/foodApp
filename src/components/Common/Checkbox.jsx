import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Checkbox = ({selected}) => {
  return (
    <View style={[styles.outerCircle, selected && styles.orangeBg]}>
      <View style={[styles.innerCircle, selected && styles.orangeBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
    borderRadius: DimensionsUtils.getDP(11),
    backgroundColor: colors.grey,
    justifyContent: 'center',
  },
  innerCircle: {
    width: DimensionsUtils.getDP(16),
    height: DimensionsUtils.getDP(16),
    borderRadius: DimensionsUtils.getDP(8),
    borderWidth: DimensionsUtils.getDP(2),
    alignSelf: 'center',
    borderColor: colors.veryLightGrey,
    backgroundColor: colors.veryLightGrey,
  },
  orangeBg: {
    backgroundColor: colors.orange,
  },
});

export default Checkbox;
