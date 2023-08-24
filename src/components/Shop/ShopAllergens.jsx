import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopAllergens = ({productAllergens}) => {
  return (
    <>
      {productAllergens.map((img, key) => (
        <View
          key={`allergy-${key}`}
          style={{
            marginRight:
              key !== productAllergens.length - 1
                ? DimensionsUtils.getDP(16)
                : 0,
          }}>
          <Image source={img} style={styles.image} />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: DimensionsUtils.getDP(36),
    height: DimensionsUtils.getDP(36),
  },
});

export default ShopAllergens;
