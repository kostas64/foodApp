import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  TouchableOpacity,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, InteractionManager} from 'react-native';

import Card from './Card';
import {sizes} from '../../constants';
import Separator from '../Common/Separator';
import {cards} from '../../assets/data/cards';
import CardActionButtons from './CardActionButtons';
import DeleteCardModal from '../Modals/DeleteCardModal';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const END_POSITION = -DimensionsUtils.getDP(80);

const CardListItem = ({
  item,
  index,
  modalRef,
  selectedCard,
  setBankCards,
  setModalContent,
  setSelectedCard,
}) => {
  const navigation = useNavigation();
  const position = useSharedValue(0);
  const onLeft = useSharedValue(true);
  const isRightEnabled = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
  }));

  const isCardSelected = selectedCard?.digits === item?.digits;

  const onEnd = e => {
    if (position.value < END_POSITION / 2) {
      isRightEnabled.value = true;

      position.value = withTiming(END_POSITION, {duration: 100});
      onLeft.value = false;
      return;
    } else {
      position.value = withTiming(0, {duration: 100});
      onLeft.value = true;
      isRightEnabled.value = false;
      return;
    }
  };

  const onGesture = e => {
    //Enable right only when delete button is visible
    if (
      (isRightEnabled.value && e.nativeEvent.translationX > 0) ||
      (!isRightEnabled.value && e.nativeEvent.translationX < 0)
    ) {
      if (onLeft.value) {
        position.value = e.nativeEvent.translationX;
      } else {
        position.value = END_POSITION + e.nativeEvent.translationX;
      }
    }
  };

  const onSelectCard = () => {
    //Avoid same card selection
    if (isCardSelected) return;

    setSelectedCard(item);

    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        navigation.pop();
      }, 300);
    });
  };

  const onPressDelete = index => {
    setModalContent(
      <DeleteCardModal
        item={item}
        onCancel={modalRef.current.closeModal}
        onDelete={() => {
          //Animated card back to position
          !!position.value && (position.value = withTiming(0, {duration: 100}));

          //Remove card from state
          setBankCards(oldCards =>
            oldCards?.filter((_, nestedIndex) => nestedIndex !== index),
          );
          isCardSelected && setSelectedCard(null);

          //Animate modal close
          modalRef.current.closeModal();
        }}
      />,
    );
    modalRef.current?.animateModal();
  };

  return (
    <>
      <Separator width={sizes.WIDTH - DimensionsUtils.getDP(70)} />
      <GestureHandlerRootView>
        <PanGestureHandler
          activeOffsetX={[0, 10]}
          activeOffsetY={100000000}
          onGestureEvent={onGesture}
          onEnded={onEnd}>
          <Animated.View style={animatedStyle}>
            <TouchableOpacity onPress={onSelectCard} style={styles.row}>
              <Card
                item={item}
                isSelected={isCardSelected}
                isLast={index === cards.length - 1}
              />
              <View style={styles.cardActions}>
                <CardActionButtons onPressDelete={() => onPressDelete(index)} />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
      {index === cards.length - 1 && (
        <Separator width={sizes.WIDTH - DimensionsUtils.getDP(70)} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardActions: {
    left: DimensionsUtils.getDP(54),
  },
  marginBottom: {
    marginBottom: DimensionsUtils.getDP(16),
  },
});

export default CardListItem;
