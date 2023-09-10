import React from 'react';
import {Appearance, StyleSheet, Text, useColorScheme} from 'react-native';

import {images} from '../constants';
import Screen from '../components/Common/Screen';
import Header from '../components/Common/Header';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import ShopsList from '../components/ShopsList/ShopsList';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const HomeScreen = () => {
  const scheme = useColorScheme();
  const color = scheme === 'dark' ? 'white' : 'black';

  const onChnageMode = () => {
    Appearance.setColorScheme(scheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Screen>
      <Header
        label={'745 Lincoln 3605'}
        rightIcon={images.colorMode}
        onPressRight={onChnageMode}
        rightIconStyle={{tintColor: color}}
      />

      {/* Title */}
      <Text style={[styles.title, {color}]}>{`Main\nCategories`}</Text>

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
