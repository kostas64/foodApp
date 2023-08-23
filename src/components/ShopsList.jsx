import React from 'react';
import {FlatList, Dimensions, StyleSheet} from 'react-native';

import {shops} from '../assets/data/shops';
import ShopsListItem from './ShopsListItem';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const {width} = Dimensions.get('screen');

const ShopsList = () => {
  return (
    <FlatList
      data={shops}
      style={{width}}
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
  },
});

export default ShopsList;
