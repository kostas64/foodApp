import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

import {colors, images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const MapHeader = ({onPressBack}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressBack}
        style={[styles.shadow, styles.backIconContainer]}>
        <Image source={images.arrowLeft} style={styles.backIcon} />
      </Pressable>
      <View style={[styles.shadow, styles.addressContainer]}>
        <View style={styles.addressInnerContainer}>
          <Image source={images.marker} style={styles.marker} />
          <Text numberOfLines={1} style={styles.addressLabel}>
            745 Lincoln Pl, New York 745 L
          </Text>
        </View>

        <Text style={styles.minutes}>5mins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: DimensionsUtils.getDP(16),
  },
  backIconContainer: {
    marginRight: DimensionsUtils.getDP(12),
    borderRadius: DimensionsUtils.getDP(42),
    paddingHorizontal: DimensionsUtils.getDP(14),
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  backIcon: {
    top: 1,
    transform: [{rotate: '270deg'}],
    width: DimensionsUtils.getDP(20),
    height: DimensionsUtils.getDP(16),
  },
  shadow: {
    shadowColor: colors.grey,
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 8,
  },
  addressContainer: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: DimensionsUtils.getDP(36),
    paddingHorizontal: DimensionsUtils.getDP(16),
    paddingVertical: DimensionsUtils.getDP(12),
  },
  addressInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marker: {
    marginRight: DimensionsUtils.getDP(8),
    tintColor: colors.orange,
    width: DimensionsUtils.getDP(20),
    height: DimensionsUtils.getDP(20),
  },
  addressLabel: {
    width: sizes.WIDTH - DimensionsUtils.getDP(202),
    fontFamily: 'Poppins-Regular',
  },
  minutes: {
    fontFamily: 'Poppins-Regular',
  },
});

export default MapHeader;
