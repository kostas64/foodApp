import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {colors, images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orangeLine} />
      <View style={styles.bottomContainer}>
        <Text style={styles.label}>{`···· ${item.digits}`}</Text>
        <Text style={styles.label}>{item.expDate}</Text>
        <Image source={images.debit} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    left: DimensionsUtils.getDP(20),
    borderRadius: DimensionsUtils.getDP(24),
    width: sizes.WIDTH - DimensionsUtils.getDP(40),
    aspectRatio: 2 / 1,
    borderColor: colors.orange,
    borderWidth: DimensionsUtils.getDP(4),
  },
  orangeLine: {
    position: 'absolute',
    width: '100%',
    height: DimensionsUtils.getDP(20),
    backgroundColor: colors.orange,
    top: DimensionsUtils.getDP(40),
  },
  bottomContainer: {
    paddingHorizontal: DimensionsUtils.getDP(20),
    alignItems: 'center',
    top:
      (sizes.WIDTH - DimensionsUtils.getDP(40)) / 2 - DimensionsUtils.getDP(44),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.black,
    fontFamily: 'Poppins-Medium',
    fontSize: DimensionsUtils.getDP(18),
  },
  image: {
    tintColor: colors.orange,
    width: DimensionsUtils.getDP(34),
    height: DimensionsUtils.getDP(22),
  },
});

export default Card;
