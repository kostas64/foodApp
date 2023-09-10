import {
  View,
  Image,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';
import {useTheme} from '@react-navigation/native';

const MapZoomButton = ({gps, zoomIn = false, onPress, bottom}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const styles = customStyle(colors);

  const backgroundColor = scheme === 'light' ? colors.white : colors.grey;
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
        style={[styles.container, styles.shadow, {backgroundColor}]}>
        <Image source={image} style={[styles.image, gps && styles.gps]} />
      </TouchableOpacity>
    </View>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    position: {
      position: 'absolute',
      right: DimensionsUtils.getDP(20),
    },
    container: {
      borderRadius: DimensionsUtils.getDP(24),
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
