import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors, images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopCartModal = ({cart, scrollY, selectedCard, setSelectedCard}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const itemPlural = cart.length === 1 ? 'item' : 'items';
  const cartLength = `${cart.length} ${itemPlural} in cart`;
  const cartPrice = `$${cart.reduce((a, b) => a + b, 0)?.toFixed(2)}`;
  const cardNumber = !!selectedCard
    ? ` ····  ${selectedCard?.digits}`
    : `Select card`;

  const marginBottom =
    insets.bottom > 0 ? insets.bottom : DimensionsUtils.getDP(24);

  const translateY = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 8],
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, 20, 60],
    outputRange: [1, 0.25, 0],
  });

  const openCardScreen = () =>
    navigation.navigate('Card', {
      selectedCard,
      setSelectedCard,
    });

  return (
    <Animated.View
      style={[styles.container, {opacity, transform: [{translateY}]}]}>
      {/* Cart Info */}
      <View style={[styles.rowBetween, styles.containerPadding]}>
        <Text style={styles.label1}>{cartLength}</Text>
        <Text style={styles.label1}>{cartPrice}</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Address & Cart */}
      <View
        style={[
          styles.rowBetween,
          styles.containerPadding,
          styles.paddingBottom,
        ]}>
        <TouchableOpacity
          hitSlop={styles.addressHitSlop}
          style={styles.rowCenter}>
          <Image source={images.marker} style={styles.marker} />
          <Text style={styles.label2}>745 Lincoln 3605</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openCardScreen}
          hitSlop={styles.debitHitSlop}
          style={styles.rowCenter}>
          <Image source={images.debit} style={styles.debit} />
          <Text style={styles.label2}>{cardNumber}</Text>
        </TouchableOpacity>
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
    </Animated.View>
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
  paddingBottom: {
    paddingBottom: DimensionsUtils.getDP(36),
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
  addressHitSlop: {
    top: DimensionsUtils.getDP(8),
    bottom: DimensionsUtils.getDP(12),
    right: DimensionsUtils.getDP(16),
    left: DimensionsUtils.getDP(12),
  },
  debitHitSlop: {
    top: DimensionsUtils.getDP(8),
    bottom: DimensionsUtils.getDP(12),
    right: DimensionsUtils.getDP(12),
    left: DimensionsUtils.getDP(16),
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
