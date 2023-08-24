import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Counter from '../Common/Counter';
import ShopImage from './ShopImage';
import {colors, sizes} from '../../constants';
import ShopDescription from './ShopDescription';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopItem = ({item, setCart}) => {
  const insets = useSafeAreaInsets();
  const [counter, setCounter] = useState(0);

  const extraHeight =
    insets.bottom > 0
      ? DimensionsUtils.getDP(32) + insets.bottom
      : DimensionsUtils.getDP(24);

  const removeItemFromCart = oldCart => {
    const indexToRemove = oldCart.indexOf(item.productPrice);
    oldCart.splice(indexToRemove, 1);

    return [...oldCart];
  };

  return (
    <View style={{width: sizes.WIDTH}}>
      {/* Shop's plate image */}
      <ShopImage image={item.productImage} />

      {/* Counter */}
      <View style={styles.counterContainer}>
        <Counter
          counter={counter}
          onPressPlus={() => {
            setCart(oldCart => [...oldCart, item.productPrice]);
            setCounter(old => old + 1);
          }}
          onPressMinus={() => {
            setCart(removeItemFromCart);
            setCounter(old => old - 1);
          }}
        />
      </View>

      {/* Content about product */}
      <ShopDescription
        productCalories={item.productCalories}
        productDesc={item.productDesc}
        productName={item.productName}
        productPrice={item.productPrice}
        productCategories={item.productCategories}
        productAllergens={item.productAllergens}
      />

      {/* Spacer for extra height */}
      <View style={{height: extraHeight}} />
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    top: -DimensionsUtils.getDP(32),
    width: DimensionsUtils.getDP(118),
    borderRadius: DimensionsUtils.getDP(30),
    backgroundColor: colors.white,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default React.memo(ShopItem);
