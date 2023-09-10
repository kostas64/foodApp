import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, StyleSheet, useColorScheme} from 'react-native';

import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Checkbox = ({selected}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const styles = customStyle(colors);

  return scheme === 'light' ? (
    <View style={[styles.outerCircle, selected && styles.orangeBg]}>
      <View style={[styles.innerCircle, selected && styles.orangeBg]} />
    </View>
  ) : (
    <>
      <View
        style={[
          styles.outerCircle,
          styles.outCircleDark,
          {
            borderColor: selected ? colors.orange : colors.grey,
          },
        ]}
      />
      {selected && <View style={[styles.orangeBg, styles.inCircleDark]} />}
    </>
  );
};

const customStyle = colors =>
  StyleSheet.create({
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
    outCircleDark: {
      borderWidth: DimensionsUtils.getDP(2),
      backgroundColor: 'rgba(0,0,0,0)',
    },
    inCircleDark: {
      position: 'absolute',
      borderRadius: DimensionsUtils.getDP(8),
      left: DimensionsUtils.getDP(24),
      width: DimensionsUtils.getDP(14),
      height: DimensionsUtils.getDP(14),
    },
  });

export default Checkbox;
