import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Checkbox from '../Common/Checkbox';
import {images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Card = ({item, onSelectCard, isSelected}) => {
  const cardNumber = `····  ····  ····  ${item.digits}`;

  return (
    <TouchableOpacity
      onPress={onSelectCard}
      style={{width: sizes.WIDTH - DimensionsUtils.getDP(40)}}>
      <View style={styles.row}>
        <Checkbox selected={isSelected} />
        <Image source={images?.[item.type]} style={styles.image} />
        <Text style={styles.number}>{cardNumber}</Text>
        <Text style={styles.expDate}>{item.expDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: DimensionsUtils.getDP(20),
    paddingVertical: DimensionsUtils.getDP(20),
  },
  number: {
    fontFamily: 'Poppins-Medium',
    fontSize: DimensionsUtils.getDP(18),
    marginRight: DimensionsUtils.getDP(16),
  },
  expDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getDP(14),
  },
  image: {
    width: DimensionsUtils.getDP(36),
    height: DimensionsUtils.getDP(22),
    marginLeft: DimensionsUtils.getDP(24),
    marginRight: DimensionsUtils.getDP(20),
  },
});

export default Card;
