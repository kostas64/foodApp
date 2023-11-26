import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {images} from '../constants';
import {cards} from '../assets/data/cards';
import Header from '../components/Common/Header';
import Screen from '../components/Common/Screen';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import CardListItem from '../components/Cards/CardListItem';
import AnimatedModal from '../components/Common/AnimatedModal';

const CardScreen = ({navigation, route}) => {
  const {selectedCard, setSelectedCard} = route?.params || {};

  const modalRef = useRef();
  const insets = useSafeAreaInsets();
  const [bankCards, setBankCards] = useState(cards);
  const [modalContent, setModalContent] = useState(null);
  const [stateCardSelect, setStateCardSelect] = useState(selectedCard);

  const listStyle = {
    paddingBottom:
      insets.bottom > 0 ? insets.bottom : DimensionsUtils.getDP(16),
  };

  const onPressBack = () => navigation.pop();

  const renderItem = ({item, index}) => (
    <CardListItem
      key={index}
      item={item}
      index={index}
      modalRef={modalRef}
      bankCards={bankCards}
      setBankCards={setBankCards}
      setModalContent={setModalContent}
      selectedCard={stateCardSelect}
      setSelectedCard={value => {
        setSelectedCard(value);
        setStateCardSelect(value);
      }}
    />
  );

  return (
    <>
      <Screen>
        <Header
          label={'Choose card'}
          onPressLeft={onPressBack}
          leftIcon={images.chevron}
          leftIconStyle={styles.leftIconStyle}
          rightIcon={images.add}
          rightIconStyle={styles.rightIconStyle}
        />

        {/* Cards list */}
        <FlatList
          data={bankCards}
          renderItem={renderItem}
          style={styles.listContainer}
          contentContainerStyle={listStyle}
          showsVerticalScrollIndicator={false}
        />
      </Screen>

      {/* Animated Modal */}
      <AnimatedModal ref={modalRef} content={modalContent} />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: DimensionsUtils.getDP(24),
  },
  leftIconStyle: {
    transform: [{rotate: '270deg'}],
  },
  rightIconStyle: {
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
});

export default CardScreen;
