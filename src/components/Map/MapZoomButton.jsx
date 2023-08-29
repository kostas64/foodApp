import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const MapZoomButton = ({gps, zoomIn = false, onPress, bottom}) => {
  const image = gps ? images.gps : zoomIn ? images.plus : images.minus;

  return (
    <View
      style={[
        styles.position,
        {
          bottom,
        },
      ]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, styles.shadow]}>
        <Image source={image} style={[styles.image, gps && styles.gps]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    right: DimensionsUtils.getDP(20),
  },
  container: {
    borderRadius: DimensionsUtils.getDP(24),
    backgroundColor: colors.white,
    padding: DimensionsUtils.getDP(12),
  },
  image: {
    width: DimensionsUtils.getDP(20),
    height: DimensionsUtils.getDP(20),
  },
  gps: {
    tintColor: colors.orange,
    bottom: -1,
    left: -1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
});

export default MapZoomButton;
