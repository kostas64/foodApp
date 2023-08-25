import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import ShopTags from './ShopTags';
import ShopAllergens from './ShopAllergens';
import {images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const titleSize = sizes.HEIGHT / 40;
const descSize = sizes.HEIGHT / 60;
const descPadding = sizes.HEIGHT / 80;

const ShopDescription = ({
  modalRef,
  productName,
  productDesc,
  productPrice,
  productCalories,
  productAllergens,
  productCategories,
  setModalContent,
}) => {
  const title = `${productName} - $${productPrice?.toFixed(2)}`;
  const calLabel = `${productCalories} cal`;

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.description, styles.center]} numberOfLines={2}>
        {productDesc}
      </Text>
      <View style={[styles.calContainer, styles.center]}>
        <Image source={images.fire} style={styles.icon} />
        <Text style={styles.calLabel}>{calLabel}</Text>
      </View>
      <View style={[styles.bigPadding, styles.center]}>
        <Text style={[styles.title, styles.smallPaddingBottom]}>Free of</Text>
        <View style={styles.row}>
          <ShopTags
            modalRef={modalRef}
            setModalContent={setModalContent}
            productCategories={productCategories}
          />
        </View>
      </View>
      <View style={[styles.smallPadding, styles.center]}>
        <Text style={[styles.title, styles.smallPaddingBottom]}>Allergens</Text>
        <View style={styles.row}>
          <ShopAllergens productAllergens={productAllergens} />
        </View>
      </View>
      <Text style={[styles.center, styles.description, styles.smallPadding]}>
        *All packaging is made from recycled materials
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignSelf: 'center',
  },
  bigPadding: {
    paddingTop: DimensionsUtils.getDP(64),
  },
  smallPadding: {
    paddingTop: DimensionsUtils.getDP(32),
  },
  smallPaddingBottom: {
    paddingBottom: DimensionsUtils.getDP(descPadding),
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: DimensionsUtils.getDP(titleSize),
  },
  description: {
    width: '80%',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getDP(descSize),
    paddingTop: DimensionsUtils.getDP(descPadding),
  },
  calContainer: {
    flexDirection: 'row',
    marginTop: DimensionsUtils.getDP(16),
  },
  icon: {
    width: DimensionsUtils.getDP(18),
    height: DimensionsUtils.getDP(18),
  },
  calLabel: {
    opacity: 0.25,
    marginLeft: DimensionsUtils.getDP(8),
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getDP(14),
  },
});

export default ShopDescription;
