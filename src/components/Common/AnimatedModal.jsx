import React, {useImperativeHandle, useRef, useState} from 'react';
import {Image, Animated, StyleSheet, Pressable} from 'react-native';

import {colors, images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const AnimatedModal = React.forwardRef(({content}, ref) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);

  const animateModal = reverse => {
    setIsAnimating(true);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: reverse ? 0 : 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: reverse ? 0 : -100,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => reverse && setIsAnimating(false));
  };

  const closeModal = () => animateModal(true);

  //Export animation trigger function
  useImperativeHandle(ref, () => ({
    animateModal,
  }));

  const Wrapper = isAnimating ? Pressable : React.Fragment;

  return (
    isAnimating && (
      <Wrapper style={styles.container} onPress={closeModal}>
        <Animated.View
          style={[
            styles.innerAnimated,
            {
              opacity,
              transform: [{translateY}],
            },
          ]}>
          {/* Close button */}
          <Pressable onPress={closeModal}>
            <Image source={images.close} style={styles.close} />
          </Pressable>

          {/* Modal content */}
          {content}
        </Animated.View>
      </Wrapper>
    )
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  innerAnimated: {
    bottom: -100,
    marginHorizontal: DimensionsUtils.getDP(16),
    borderRadius: DimensionsUtils.getDP(32),
    backgroundColor: colors.white,
    paddingTop: DimensionsUtils.getDP(32),
    paddingHorizontal: DimensionsUtils.getDP(20),
    paddingBottom: DimensionsUtils.getDP(16),
  },
  close: {
    alignSelf: 'flex-end',
    right: DimensionsUtils.getDP(8),
    width: DimensionsUtils.getDP(12),
    height: DimensionsUtils.getDP(12),
    marginBottom: DimensionsUtils.getDP(4),
  },
});

export default React.memo(AnimatedModal);
