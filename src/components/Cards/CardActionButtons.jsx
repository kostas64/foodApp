import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const CardActionButtons = ({scaleStyle}) => {
  return (
    <View style={styles.container}>
      <View>
        <Animated.Image
          source={images.pencil}
          style={[styles.pencil, scaleStyle]}
        />
      </View>
      <View>
        <Animated.Image
          source={images.trash}
          style={[styles.trash, scaleStyle]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: DimensionsUtils.getDP(12),
  },
  pencil: {
    tintColor: colors.orange,
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
  trash: {
    tintColor: colors.black,
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
});

export default CardActionButtons;
