import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Button from '../Common/Button';
import {images, sizes} from '../../constants';
import useBackAction from '../../hooks/useBackAction';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopCartModal = ({
  cart,
  shop,
  scrollY,
  selectedCard,
  loadingOrder,
  setLoadingOrder,
  setSelectedCard,
}) => {
  useBackAction();
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const styles = customStyle(colors);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const icon =
    scheme === 'light' || selectedCard?.type === 'mastercard'
      ? images?.[selectedCard?.type]
      : images?.['visaDark'];

  const backgroundColor = scheme === 'dark' ? 'black' : colors.white;
  const labelColor = scheme === 'dark' ? 'white' : colors.black;

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

  const openMapScreen = () =>
    navigation.navigate('Map', {
      shop,
    });

  const onPressOrder = () => {
    setLoadingOrder(true);
  };

  const handleGesture = value =>
    navigation.setOptions({
      gestureEnabled: value,
    });

  React.useEffect(() => {
    if (loadingOrder) {
      handleGesture(false);

      setTimeout(() => {
        handleGesture(true);
        navigation.pop();
      }, 2500);
    }
  }, [loadingOrder]);

  return (
    <Animated.View
      style={[
        styles.container,
        {backgroundColor, opacity, transform: [{translateY}]},
      ]}>
      {/* Cart Info */}
      <View style={[styles.rowBetween, styles.containerPadding]}>
        <Text style={[styles.label1, {color: labelColor}]}>{cartLength}</Text>
        <Text style={[styles.label1, {color: labelColor}]}>{cartPrice}</Text>
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
          onPress={openMapScreen}
          hitSlop={styles.addressHitSlop}
          style={styles.rowCenter}>
          <Image source={images.marker} style={styles.marker} />
          <Text style={[styles.label2, {color: labelColor}]}>
            745 Lincoln 3605
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openCardScreen}
          hitSlop={styles.debitHitSlop}
          style={styles.rowCenter}>
          <Image source={icon} style={styles.debit} />
          <Text style={[styles.label2, {color: labelColor}]}>{cardNumber}</Text>
        </TouchableOpacity>
      </View>

      {/* Order Button */}
      <Button
        label={'Order'}
        onPress={onPressOrder}
        buttonPressed={loadingOrder}
        containerStyle={{
          marginBottom,
          marginHorizontal: DimensionsUtils.getDP(20),
        }}
      />
    </Animated.View>
  );
};

const customStyle = colors =>
  StyleSheet.create({
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
      tintColor: colors.orange,
      marginRight: DimensionsUtils.getDP(8),
      width: DimensionsUtils.getDP(18),
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
      width: DimensionsUtils.getDP(26),
      height: DimensionsUtils.getDP(16),
    },
    buttonLabel: {
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getFontSize(18),
      color: colors.white,
    },
    buttonContainer: {
      height: DimensionsUtils.getDP(50),
      marginHorizontal: DimensionsUtils.getDP(20),
      backgroundColor: colors.orange,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: DimensionsUtils.getDP(16),
    },
  });

export default ShopCartModal;
