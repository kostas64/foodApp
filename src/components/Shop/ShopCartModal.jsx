import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors, images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopCartModal = ({cart}) => {
  const insets = useSafeAreaInsets();

  const itemPlural = cart.length === 1 ? 'item' : 'items';
  const cartLength = `${cart.length} ${itemPlural} in cart`;
  const cartPrice = `$${cart.reduce((a, b) => a + b, 0)?.toFixed(2)}`;

  const marginBottom =
    insets.bottom > 0
      ? insets.bottom + DimensionsUtils.getDP(8)
      : DimensionsUtils.getDP(24);

  return (
    <View style={styles.container}>
      {/* Cart Info */}
      <View style={[styles.rowBetween, styles.containerPadding]}>
        <Text style={styles.label1}>{cartLength}</Text>
        <Text style={styles.label1}>{cartPrice}</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Address & Cart */}
      <View style={[styles.rowBetween, styles.containerPadding]}>
        <View style={styles.rowCenter}>
          <Image source={images.marker} style={styles.marker} />
          <Text style={styles.label2}>745 Lincoln 3605</Text>
        </View>
        <View style={styles.rowCenter}>
          <Image source={images.debit} style={styles.debit} />
          <Text style={styles.label2}>···· 3605</Text>
        </View>
      </View>

      {/* Order Button */}
      <View
        style={[
          styles.buttonContainer,
          {
            marginBottom,
          },
        ]}>
        <Text style={styles.buttonLabel}>Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    elevation: 15,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingTop: DimensionsUtils.getDP(4),
    backgroundColor: colors.white,
    borderTopLeftRadius: DimensionsUtils.getDP(32),
    borderTopRightRadius: DimensionsUtils.getDP(32),
  },
  containerPadding: {
    paddingVertical: DimensionsUtils.getDP(18),
    paddingHorizontal: DimensionsUtils.getDP(24),
  },
  divider: {
    width: sizes.WIDTH,
    height: 1,
    backgroundColor: colors.lightGrey,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label1: {
    fontSize: DimensionsUtils.getFontSize(16),
    fontFamily: 'Poppins-Medium',
  },
  label2: {
    fontSize: DimensionsUtils.getFontSize(14),
    fontFamily: 'Poppins-Medium',
  },
  marker: {
    marginRight: DimensionsUtils.getDP(8),
    width: DimensionsUtils.getDP(16),
    height: DimensionsUtils.getDP(18),
  },
  debit: {
    marginRight: DimensionsUtils.getDP(8),
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(16),
  },
  buttonLabel: {
    paddingVertical: DimensionsUtils.getDP(12),
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getFontSize(18),
    color: colors.white,
  },
  buttonContainer: {
    marginHorizontal: DimensionsUtils.getDP(20),
    backgroundColor: colors.orange,
    alignItems: 'center',
    borderRadius: DimensionsUtils.getDP(16),
  },
});

export default ShopCartModal;
