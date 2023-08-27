import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {colors, images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Card = ({item, onPressCard = () => {}}) => {
  const cardNumber = `· · · ·    · · · ·    · · · ·    ${item.digits}`;

  return (
    <TouchableOpacity onPress={onPressCard} style={styles.container}>
      <View style={styles.orangeLine} />

      {/* Card number & Exp Date */}
      <View style={styles.midContainer}>
        <View style={styles.innerMidContainer}>
          <View>
            <Text style={styles.label}>{cardNumber}</Text>
          </View>
          <View>
            <Text style={styles.label}>{item.expDate}</Text>
          </View>
        </View>
      </View>

      {/* Card name * Icon */}
      <View style={styles.bottomContainer}>
        <Text style={styles.label}>{item.name}</Text>
        <Image source={images.debit} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    left: DimensionsUtils.getDP(20),
    borderRadius: DimensionsUtils.getDP(24),
    width: sizes.WIDTH - DimensionsUtils.getDP(40),
    aspectRatio: 2 / 1,
    borderColor: colors.orange,
    borderWidth: DimensionsUtils.getDP(4),
  },
  orangeLine: {
    position: 'absolute',
    width: '100%',
    height: DimensionsUtils.getDP(20),
    backgroundColor: colors.orange,
    top: DimensionsUtils.getDP(40),
  },
  midContainer: {
    width: '100%',
    position: 'absolute',
    bottom: DimensionsUtils.getDP(48),
  },
  innerMidContainer: {
    marginHorizontal: DimensionsUtils.getDP(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    paddingHorizontal: DimensionsUtils.getDP(20),
    alignItems: 'center',
    top:
      (sizes.WIDTH - DimensionsUtils.getDP(40)) / 2 - DimensionsUtils.getDP(44),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: DimensionsUtils.getDP(18),
  },
  image: {
    tintColor: colors.orange,
    width: DimensionsUtils.getDP(34),
    height: DimensionsUtils.getDP(22),
  },
});

export default Card;