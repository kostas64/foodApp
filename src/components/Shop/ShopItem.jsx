import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ShopImage from './ShopImage';
import {sizes} from '../../constants';
import Counter from '../Common/Counter';
import ShopDescription from './ShopDescription';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopItem = ({item, setCart, setModalContent, modalRef}) => {
  const insets = useSafeAreaInsets();
  const [counter, setCounter] = useState(0);

  const extraHeight =
    insets.bottom > 0
      ? DimensionsUtils.getDP(32) + insets.bottom
      : DimensionsUtils.getDP(24);

  const onPressPlus = () => {
    setCart(oldCart => [...oldCart, item.productPrice]);
    setCounter(old => old + 1);
  };

  const onPressMinus = () => {
    setCart(removeItemFromCart);
    setCounter(old => old - 1);
  };

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
          onPressPlus={onPressPlus}
          onPressMinus={onPressMinus}
        />
      </View>

      {/* Content about product */}
      <ShopDescription
        modalRef={modalRef}
        setModalContent={setModalContent}
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
    backgroundColor: 'white',
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
