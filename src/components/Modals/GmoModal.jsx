import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import {images} from '../../constants';
import {openURL} from '../../utils/GenericUtils';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const GmoModal = () => {
  const {colors} = useTheme();
  const styles = customStyle(colors);

  const source = 'https://www.nongmoproject.org/gmo-facts/what-is-gmo/';

  return (
    <View>
      <Image source={images.gmoFree} style={styles.image} />
      <Text style={styles.label}>
        <Text>A </Text>
        <Text style={styles.semiBold}>GMO</Text>
        <Text>
          , or genetically modified organism, is a plant, animal, microorganism
          or other organism whose genetic makeup has been modified in a
          laboratory using genetic engineering or transgenic technology. This
          creates combinations of plant, animal, bacterial and virus genes that
          do not occur in nature or through traditional crossbreeding methods.
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

export default GmoModal;
