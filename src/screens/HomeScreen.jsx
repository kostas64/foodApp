import React from 'react';
import {StyleSheet, Text} from 'react-native';

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
      <Text style={styles.title}>{`Main\nCategories`}</Text>

      {/* Categories List */}
      <CategoriesList />
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    marginTop: 24,
    marginBottom: 16,
    paddingLeft: 20,
    fontFamily: 'Poppins-Medium',
  },
});

export default HomeScreen;
