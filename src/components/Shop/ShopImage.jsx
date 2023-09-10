import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {sizes} from '../../constants';
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
    marginTop: DimensionsUtils.getDP(24),
    width: sizes.HEIGHT * 0.25,
    borderRadius: sizes.HEIGHT * 0.25,
    backgroundColor: 'white',
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
    width: sizes.HEIGHT * 0.25,
    height: sizes.HEIGHT * 0.25,
  },
});

export default ShopImage;
