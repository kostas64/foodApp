import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';

import {colors, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Pagination = ({scrollX, dotsLength}) => {
  const arr = new Array(dotsLength).fill(0);

  return (
    <View style={styles.container}>
      {arr.map((_, index) => {
        const opacity = scrollX.interpolate({
          inputRange: [
            (index - 1) * sizes.WIDTH,
            index * sizes.WIDTH,
            (index + 1) * sizes.WIDTH,
          ],
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });

        const scale = scrollX.interpolate({
          inputRange: [
            (index - 1) * sizes.WIDTH,
            index * sizes.WIDTH,
            (index + 1) * sizes.WIDTH,
          ],
          outputRange: [1, 1.4, 1],
          extrapolate: 'clamp',
        });

        return (
          <View key={`pagination-${index}`}>
            <Animated.View
              style={[
                styles.dot,
                {
                  opacity: 0.5,
                  marginRight:
                    index !== dotsLength ? DimensionsUtils.getDP(8) : 0,
                  backgroundColor: colors.grey,
                },
              ]}
            />
            <Animated.View
              style={[
                styles.dot,
                styles.moveDot,
                {
                  opacity,
                  transform: [{scale}],
                  marginRight:
                    index !== dotsLength ? DimensionsUtils.getDP(8) : 0,
                },
              ]}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top:
      sizes.HEIGHT * 0.25 +
      DimensionsUtils.getDP(24) +
      DimensionsUtils.getDP(24) +
      DimensionsUtils.getDP(sizes.HEIGHT / 80),
  },
  dot: {
    width: DimensionsUtils.getDP(6),
    height: DimensionsUtils.getDP(6),
    borderRadius: DimensionsUtils.getDP(3),
  },
  moveDot: {
    position: 'absolute',
    backgroundColor: colors.orange,
  },
});

export default Pagination;
