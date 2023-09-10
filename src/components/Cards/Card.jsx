import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, StyleSheet, Image, useColorScheme} from 'react-native';

import Checkbox from '../Common/Checkbox';
import {images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Card = ({item, onSelectCard, isSelected}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const labelColor = scheme === 'dark' ? 'white' : colors.black;

  const cardNumber = `····  ····  ····  ${item.digits}`;
  const icon =
    scheme === 'light' || item.type === 'mastercard'
      ? images?.[item.type]
      : images?.['visaDark'];

  return (
    <TouchableOpacity
      onPress={onSelectCard}
      style={{width: sizes.WIDTH - DimensionsUtils.getDP(40)}}>
      <View style={styles.row}>
        <Checkbox selected={isSelected} />
        <Image source={icon} style={styles.image} />
        <Text style={[styles.number, {color: labelColor}]}>{cardNumber}</Text>
        <Text style={[styles.expDate, {color: labelColor}]}>
          {item.expDate}
        </Text>
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
