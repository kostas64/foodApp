import React from 'react';
import {Marker} from 'react-native-maps';
import {Image, StyleSheet, View} from 'react-native';

import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const MapMarker = ({isUser, coords}) => {
  const markerIcon = isUser ? images.person : images.marker;

  return (
    <Marker coordinate={coords}>
      <View style={[styles.markerContainer]}>
        <Image source={markerIcon} style={styles.marker} />
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: colors.orange,
    padding: DimensionsUtils.getDP(8),
    borderRadius: DimensionsUtils.getDP(120),
    borderColor: colors.white,
    borderWidth: DimensionsUtils.getDP(4),
  },
  marker: {
    tintColor: colors.white,
    width: DimensionsUtils.getDP(16),
    height: DimensionsUtils.getDP(16),
  },
});

export default MapMarker;
