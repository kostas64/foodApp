import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {Appearance, useColorScheme} from 'react-native';

import {images} from '../constants';
import Screen from '../components/Common/Screen';
import Header from '../components/Common/Header';
import HomeTitle from '../components/Home/HomeTitle';
import ShopsList from '../components/ShopsList/ShopsList';
import {setBarStyle} from '../components/Common/StatusBarManager';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const HomeScreen = () => {
  const listRef = React.useRef();
  const scheme = useColorScheme();
  const scrollY = useSharedValue(0);

  const color = scheme === 'dark' ? 'white' : 'black';

  const onChangeMode = () => {
    setBarStyle(scheme === 'dark' ? 'dark-content' : 'light-content');
    Appearance.setColorScheme(scheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Screen>
      <Header
        label={'745 Lincoln 3605'}
        rightIcon={images.colorMode}
        onPressRight={onChangeMode}
        rightIconStyle={{tintColor: color}}
      />

      {/* Title */}
      <HomeTitle title={'Choose cuisine'} color={color} scrollY={scrollY} />

      {/* Categories List */}
      <CategoriesList scrollY={scrollY} />

      {/* Shops List */}
      <ShopsList listRef={listRef} scrollY={scrollY} />
    </Screen>
  );
};

export default HomeScreen;
