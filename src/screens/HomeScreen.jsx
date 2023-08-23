import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {images} from '../constants';
import Screen from '../components/Screen';
import Header from '../components/Header';
import ShopsList from '../components/ShopsList';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import CategoriesList from '../components/CategoriesList';

const HomeScreen = () => {
  return (
    <Screen>
      <Header
        leftIcon={images.person}
        rightIcon={images.basket}
        label={'745 Lincoln 3605'}
      />

      {/* Title */}
      <Text style={styles.title}>{`Main\nCategories`}</Text>

      {/* Categories List */}
      <CategoriesList />

      {/* Shops List */}
      <ShopsList />
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: DimensionsUtils.getFontSize(26),
    marginTop: DimensionsUtils.getDP(16),
    marginBottom: DimensionsUtils.getDP(4),
    paddingLeft: DimensionsUtils.getDP(20),
    fontFamily: 'Poppins-Medium',
  },
});

export default HomeScreen;
