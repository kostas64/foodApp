import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

import {colors, images} from '../../constants';
import {openURL} from '../../utils/GenericUtils';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const GlutenModal = () => {
  const source =
    'https://acaai.org/allergies/allergic-conditions/food/wheat-gluten/';

  return (
    <View>
      <Image source={images.glutenFree} style={styles.image} />
      <Text style={styles.label}>
        <Text style={styles.semiBold}>Gluten </Text>
        <Text>
          is a protein found in grains, such as wheat, barley and rye. Some
          people are allergic to wheat, but that is not the same as a gluten
          allergy. Gluten allergy is a misleading term commonly confused with
          wheat allergy, or sometimes celiac disease. There is no such thing as
          a gluten allergy, but there is a condition called Celiac Disease.
          Celiac Disease is a digestive condition that is potentially serious if
          not diagnosed or treated.
        </Text>
      </Text>
      <Pressable
        onPress={() => openURL(source)}
        hitSlop={styles.hitSlop}
        style={styles.sourceContainer}>
        <Text style={styles.sourceLabel}>Read more</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: DimensionsUtils.getDP(64),
    height: DimensionsUtils.getDP(64),
    tintColor: colors.orange,
    marginBottom: DimensionsUtils.getDP(16),
  },
  label: {
    textAlign: 'justify',
    fontSize: DimensionsUtils.getFontSize(14),
    fontFamily: 'Poppins-Regular',
  },
  semiBold: {
    fontWeight: '700',
  },
  sourceContainer: {
    alignSelf: 'flex-end',
    paddingTop: DimensionsUtils.getDP(8),
  },
  sourceLabel: {
    color: colors.orange,
    fontFamily: 'Poppins-Medium',
    fontSize: DimensionsUtils.getDP(12),
    textDecorationLine: 'underline',
  },
  hitSlop: {
    top: DimensionsUtils.getDP(24),
    left: DimensionsUtils.getDP(24),
    bottom: DimensionsUtils.getDP(12),
    right: DimensionsUtils.getDP(12),
  },
});

export default GlutenModal;
