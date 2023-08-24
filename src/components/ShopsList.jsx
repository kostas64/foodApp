import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {sizes} from '../constants';
import {shops} from '../assets/data/shops';
import ShopsListItem from './ShopsListItem';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const ShopsList = () => {
  return (
    <FlatList
      data={shops}
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
