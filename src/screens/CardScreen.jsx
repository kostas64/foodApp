import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {images} from '../constants';
import {cards} from '../assets/data/cards';
import Header from '../components/Common/Header';
import Screen from '../components/Common/Screen';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import CardListItem from '../components/Cards/CardListItem';

const CardScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [bankCards, setBankCards] = useState(cards);

  const listStyle = {
    paddingBottom:
      insets.bottom > 0 ? insets.bottom : DimensionsUtils.getDP(16),
    marginTop: DimensionsUtils.getDP(16),
  };

  const onPressBack = () => navigation.pop();

  const renderItem = ({item, index}) => (
    <CardListItem key={index} item={item} />
  );

  return (
    <Screen>
      <Header
        label={'Cards'}
        onPressLeft={onPressBack}
        leftIcon={images.arrowLeft}
        leftIconStyle={styles.leftIconStyle}
        rightIcon={images.add}
        rightIconStyle={styles.rightIconStyle}
      />

      <FlatList
        data={bankCards}
        renderItem={renderItem}
        contentContainerStyle={listStyle}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  leftIconStyle: {
    transform: [{rotate: '270deg'}],
  },
  rightIconStyle: {
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
});

export default CardScreen;
