import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopTags = ({productCategories}) => {
  return (
    <>
      {productCategories.map((item, index) => (
        <View
          key={index}
          style={[
            styles.container,
            {
              marginRight:
                index !== productCategories.length - 1
                  ? DimensionsUtils.getDP(8)
                  : 0,
            },
          ]}>
          <Text style={styles.label}>{item}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    borderRadius: DimensionsUtils.getDP(16),
    paddingHorizontal: DimensionsUtils.getDP(8),
    paddingVertical: DimensionsUtils.getDP(4),
  },
  label: {
    fontSize: DimensionsUtils.getDP(12),
    color: colors.white,
  },
});

export default ShopTags;
