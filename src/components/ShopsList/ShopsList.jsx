import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Animated, {useAnimatedScrollHandler} from 'react-native-reanimated';

import {sizes} from '../../constants';
import ShopsListItem from './ShopsListItem';
import {shops} from '../../assets/data/shops';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const AnimFlat = Animated.createAnimatedComponent(FlatList);

const ShopsList = ({listRef, scrollY}) => {
  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  return (
    <AnimFlat
      ref={listRef}
      data={shops}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      style={{width: sizes.WIDTH}}
      contentContainerStyle={styles.contentStyle}
      renderItem={({item}) => <ShopsListItem item={item} />}
      keyExtractor={item => `${item.id}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: 'center',
    marginTop: DimensionsUtils.getDP(16),
    paddingBottom: DimensionsUtils.getDP(130),
  },
});

export default ShopsList;
