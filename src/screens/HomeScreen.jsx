import React from 'react';
import {Text} from 'react-native';

import {images} from '../constants';
import Screen from '../components/Screen';
import Header from '../components/Header';
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
      <Text
        style={{
          fontSize: 28,
          fontWeight: '600',
          marginVertical: 24,
        }}>{`Main\nCategories`}</Text>

      {/* Categories List */}
      <CategoriesList />
    </Screen>
  );
};

export default HomeScreen;
