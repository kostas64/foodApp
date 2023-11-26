import React from 'react';
import {useTheme} from '@react-navigation/native';
import {ActivityIndicator, Image, Pressable, StyleSheet} from 'react-native';

import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const SearchDeleteInput = ({typing, onPress}) => {
  const {colors} = useTheme();
  const styles = customStyles(colors);

  return typing ? (
    <ActivityIndicator size={'small'} />
  ) : (
    <Pressable
      onPress={onPress}
      hitSlop={styles.hitSlop}
      style={styles.justifyCenter}>
      <Image source={images.close} style={styles.image} />
    </Pressable>
  );
};

const customStyles = colors =>
  StyleSheet.create({
    justifyCenter: {
      zIndex: 100000,
      justifyContent: 'center',
      paddingLeft: DimensionsUtils.getDP(8),
    },
    hitSlop: {
      top: DimensionsUtils.getDP(16),
      right: DimensionsUtils.getDP(16),
      bottom: DimensionsUtils.getDP(16),
      left: DimensionsUtils.getDP(16),
    },
    image: {
      tintColor: colors.grey,
      width: DimensionsUtils.getDP(12),
      height: DimensionsUtils.getDP(12),
    },
  });

export default SearchDeleteInput;
