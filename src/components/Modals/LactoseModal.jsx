import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import {images} from '../../constants';
import {openURL} from '../../utils/GenericUtils';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const LactoseModal = () => {
  const {colors} = useTheme();
  const styles = customStyle(colors);

  const source =
    'https://www.nhsinform.scot/illnesses-and-conditions/nutritional/lactose-intolerance#:~:text=Lactose%20intolerance%20is%20a%20common,flatulence%20(wind)';

  return (
    <View>
      <Image source={images.lactoseFree} style={styles.image} />
      <Text style={styles.label}>
        <Text style={styles.semiBold}>Lactose </Text>
        <Text>
          intolerance is a common digestive problem where the body is unable to
          digest lactose, a type of sugar mainly found in milk and dairy
          products.
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

const customStyle = colors =>
  StyleSheet.create({
    image: {
      alignSelf: 'center',
      width: DimensionsUtils.getDP(64),
      height: DimensionsUtils.getDP(64),
      tintColor: colors.orange,
      marginBottom: DimensionsUtils.getDP(16),
    },
    label: {
      color: colors.black,
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

export default LactoseModal;
