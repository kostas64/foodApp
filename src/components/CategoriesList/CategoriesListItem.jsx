import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import {colors} from '../../constants';
import {categories} from '../../assets/data/categories';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const CategoriesListItem = ({item, index, selectedItem, setSelectedItem}) => {
  const backgroundColor =
    selectedItem.id === index ? colors.orange : colors.white;
  const itemCircleColor =
    selectedItem.id === index ? colors.white : colors.lightGrey;
  const labelColor = selectedItem.id === index ? colors.white : colors.black;
  const hasLeftPadding = index === 0;

  return (
    <TouchableOpacity
      onPress={() => setSelectedItem(categories[index])}
      style={[
        styles.listContainer,
        {backgroundColor},
        hasLeftPadding && styles.itemMargin,
      ]}>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: itemCircleColor,
          },
        ]}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text
        style={[
          styles.label,
          {
            color: labelColor,
          },
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: DimensionsUtils.getDP(8),
    alignItems: 'center',
    width: 62,
    borderRadius: DimensionsUtils.getDP(36),
    marginRight: DimensionsUtils.getDP(12),
    marginLeft: DimensionsUtils.getDP(8),
    marginVertical: DimensionsUtils.getDP(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  itemMargin: {
    marginLeft: DimensionsUtils.getDP(16),
  },
  imageContainer: {
    padding: DimensionsUtils.getDP(14),
    borderRadius: DimensionsUtils.getDP(28),
  },
  image: {
    height: 24,
    width: 24,
  },
  label: {
    marginTop: DimensionsUtils.getDP(8),
    marginBottom: DimensionsUtils.getDP(16),
    fontSize: DimensionsUtils.getFontSize(11),
    fontFamily: 'Poppins-SemiBold',
  },
});

export default CategoriesListItem;
