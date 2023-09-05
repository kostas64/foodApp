import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={images.logo} style={styles.logo} />
      <Text style={styles.appName}>FooDmE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    marginRight: DimensionsUtils.getDP(16),
    width: DimensionsUtils.getDP(58),
    height: DimensionsUtils.getDP(64),
  },
  appName: {
    color: colors.orange,
    fontFamily: 'Poppins-Bold',
    fontSize: DimensionsUtils.getFontSize(28),
  },
});

export default Logo;
