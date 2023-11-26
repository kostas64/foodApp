import {
  Image,
  Animated,
  Pressable,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React, {useImperativeHandle, useRef, useState} from 'react';

import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const AnimatedModal = React.forwardRef(({content}, ref) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const styles = customStyle(colors);

  const backgroundColor = scheme === 'dark' ? 'rgb(90,90,90)' : colors.white;

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
    closeModal,
  }));

  const Wrapper = isAnimating ? Pressable : React.Fragment;

  return (
    isAnimating && (
      <Wrapper style={[styles.container]} onPress={closeModal}>
        <Animated.View
          style={[
            styles.innerAnimated,
            {
              backgroundColor,
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

const customStyle = colors =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      zIndex: 10000,
    },
    innerAnimated: {
      bottom: -100,
      marginHorizontal: DimensionsUtils.getDP(16),
      borderRadius: DimensionsUtils.getDP(32),
      paddingTop: DimensionsUtils.getDP(32),
      paddingHorizontal: DimensionsUtils.getDP(20),
      paddingBottom: DimensionsUtils.getDP(16),
    },
    close: {
      tintColor: colors.black,
      alignSelf: 'flex-end',
      right: DimensionsUtils.getDP(8),
      width: DimensionsUtils.getDP(12),
      height: DimensionsUtils.getDP(12),
      marginBottom: DimensionsUtils.getDP(4),
    },
  });

export default React.memo(AnimatedModal);
