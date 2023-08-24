import {Animated, View} from 'react-native';
import React, {useRef, useState} from 'react';

import {images} from '../constants';
import Screen from '../components/Common/Screen';
import Header from '../components/Common/Header';
import ShopItem from '../components/Shop/ShopItem';
import Pagination from '../components/Common/Pagination';
import ShopCartModal from '../components/Shop/ShopCartModal';

const ShopScreen = ({navigation, route}) => {
  const {shop} = route?.params || {};
  const [cart, setCart] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onPressBack = () => navigation.pop();

  const renderItem = ({item, index}) => (
    <ShopItem key={index} item={item} setCart={setCart} />
  );

  return (
    <Screen>
      <Header
        label={shop.name}
        onPressLeft={onPressBack}
        leftIcon={images.arrowLeft}
        rightIcon={images.menu}
      />

      {/* Products List */}
      <View>
        <Animated.FlatList
          horizontal
          pagingEnabled
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          data={shop.products}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>

      {/* Pagination */}
      <Pagination scrollX={scrollX} dotsLength={shop?.products?.length} />

      {/* Cart Modal */}
      <ShopCartModal cart={cart} />
    </Screen>
  );
};

export default ShopScreen;
