import Animated, {
  withTiming,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {InteractionManager, StyleSheet, View} from 'react-native';

import Card from './Card';
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
  const onLeft = useSharedValue(true);
  const isRightEnabled = useSharedValue(false);
  const position = useSharedValue(0);
  const scaleActions = useSharedValue(1);

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{translateX: scaleActions.value}],
  }));
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
  }));

  const isCardSelected = selectedCard?.digits === item?.digits;

  const onEnd = e => {
    if (position.value < END_POSITION / 2) {
      isRightEnabled.value = true;
      scaleActions.value = withSpring(-24, {
        stiffness: 120,
        damping: 20,
        mass: 2,
      });
      position.value = withTiming(END_POSITION, {duration: 100});
      onLeft.value = false;
      return;
    } else {
      scaleActions.value = withTiming(1, {duration: 100});
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

  //TO-DO edit card
  const onPressEdit = index => {};

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        activeOffsetX={[0, 10]}
        activeOffsetY={100000000}
        onGestureEvent={onGesture}
        onEnded={onEnd}>
        <Animated.View style={animatedStyle}>
          <View
            style={[styles.container, !isCardSelected && styles.marginBottom]}>
            <Card
              item={item}
              isSelected={isCardSelected}
              onPressCard={onSelectCard}
            />
            <View style={styles.cardActions}>
              <CardActionButtons
                scaleStyle={scaleStyle}
                onPressEdit={() => onPressEdit(index)}
                onPressDelete={() => onPressDelete(index)}
              />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: DimensionsUtils.getDP(4),
  },
  cardActions: {
    left: DimensionsUtils.getDP(74),
  },
  marginBottom: {
    marginBottom: DimensionsUtils.getDP(16),
  },
});

export default CardListItem;
