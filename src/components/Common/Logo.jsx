import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {colors, images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const LOGO_HEIGHT = sizes.HEIGHT / 15;
const LOGO_WIDTH = LOGO_HEIGHT * 0.8;
const LOGO_FONT_SIZE = LOGO_HEIGHT / 2;

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
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
  },
  appName: {
    color: colors.orange,
    fontFamily: 'Poppins-Bold',
    fontSize: LOGO_FONT_SIZE,
  },
});

export default Logo;
