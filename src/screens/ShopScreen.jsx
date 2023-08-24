import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {images} from '../constants';
import Screen from '../components/Common/Screen';
import Header from '../components/Common/Header';
import ShopItem from '../components/Shop/ShopItem';
import Pagination from '../components/Common/Pagination';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import ShopCartModal from '../components/Shop/ShopCartModal';

const ShopScreen = ({navigation, route}) => {
  const {shop} = route?.params || {};

  const [cart, setCart] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  const onPressBack = () => navigation.pop();

  const renderItem = ({item, index}) => (
    <ShopItem key={index} item={item} setCart={setCart} />
  );

  const onVerticalScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );

  const onHorizontalScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: true},
  );

  return (
    <Screen>
      <Header
        label={shop.name}
        onPressLeft={onPressBack}
        leftIcon={images.arrowLeft}
        rightIcon={images.menu}
      />
      <Animated.ScrollView
        bounces={false}
        style={styles.scrollView}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={onVerticalScroll}>
        {/* Products List */}
        <View>
          <Animated.FlatList
            horizontal
            pagingEnabled
            data={shop.products}
            renderItem={renderItem}
            onScroll={onHorizontalScroll}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Pagination */}
        <Pagination scrollX={scrollX} dotsLength={shop?.products?.length} />
      </Animated.ScrollView>

      {/* Cart Modal */}
      <ShopCartModal cart={cart} scrollY={scrollY} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: DimensionsUtils.getDP(16),
  },
});

export default ShopScreen;
