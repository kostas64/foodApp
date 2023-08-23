import React from 'react';

import {images} from '../constants';
import Screen from '../components/Screen';
import Header from '../components/Header';

const ShopScreen = ({route}) => {
  const {shop} = route?.params || {};
  return (
    <Screen>
      <Header
        label={shop.name}
        leftIcon={images.arrowLeft}
        rightIcon={images.menu}
      />
    </Screen>
  );
};

export default ShopScreen;
