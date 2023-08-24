import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {colors, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopImage = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: DimensionsUtils.getDP(48),
    width: sizes.WIDTH * 0.65,
    borderRadius: sizes.WIDTH * 0.65,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: sizes.WIDTH * 0.65,
    height: sizes.WIDTH * 0.65,
  },
});

export default ShopImage;
