import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopDescription = ({
  productName,
  productPrice,
  productDesc,
  productCalories,
}) => {
  const title = `${productName} - $${productPrice?.toFixed(2)}`;

  return (
    <View style={styles.centerItems}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {productDesc}
      </Text>
      <View style={styles.calContainer}>
        <Image source={images.fire} style={styles.icon} />
        <Text style={styles.calLabel}>{`${productCalories} cal`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerItems: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: DimensionsUtils.getDP(24),
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getDP(16),
    width: '80%',
    paddingTop: DimensionsUtils.getDP(16),
  },
  calContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DimensionsUtils.getDP(16),
  },
  icon: {
    width: DimensionsUtils.getDP(20),
    height: DimensionsUtils.getDP(20),
  },
  calLabel: {
    opacity: 0.25,
    marginLeft: DimensionsUtils.getDP(8),
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getDP(14),
  },
});

export default ShopDescription;
