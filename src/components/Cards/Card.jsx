import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {colors, images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const Card = ({item, isSelected, onPressCard = () => {}}) => {
  const cardNumber = `· · · ·    · · · ·    · · · ·    ${item.digits}`;

  return (
    <>
      <TouchableOpacity
        onPress={onPressCard}
        style={[styles.container, isSelected && styles.orangeBg]}>
        {/* Card number & Exp Date */}
        <View style={styles.midContainer}>
          <View style={styles.innerMidContainer}>
            <View>
              <Text style={[styles.label, isSelected && styles.whiteLabel]}>
                {cardNumber}
              </Text>
            </View>
            <View>
              <Text style={[styles.label, isSelected && styles.whiteLabel]}>
                {item.expDate}
              </Text>
            </View>
          </View>
        </View>

        {/* Card name * Icon */}
        <View style={styles.bottomContainer}>
          <Text style={[styles.label, isSelected && styles.whiteLabel]}>
            {item.name}
          </Text>
          <Image
            source={images.debit}
            style={[styles.image, isSelected && styles.whiteTing]}
          />
        </View>
      </TouchableOpacity>
      <View style={[styles.greyLine, isSelected && styles.whiteBg]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    left: DimensionsUtils.getDP(20),
    borderRadius: DimensionsUtils.getDP(24),
    width: sizes.WIDTH - DimensionsUtils.getDP(40),
    aspectRatio: 2 / 1,
    borderColor: colors.grey,
    borderWidth: DimensionsUtils.getDP(4),
  },
  greyLine: {
    position: 'absolute',
    left: DimensionsUtils.getDP(20),
    width: sizes.WIDTH - DimensionsUtils.getDP(40),
    height: DimensionsUtils.getDP(20),
    backgroundColor: colors.grey,
    top: DimensionsUtils.getDP(40),
  },
  midContainer: {
    width: '100%',
    position: 'absolute',
    bottom: DimensionsUtils.getDP(48),
  },
  innerMidContainer: {
    marginHorizontal: DimensionsUtils.getDP(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    paddingHorizontal: DimensionsUtils.getDP(20),
    alignItems: 'center',
    top:
      (sizes.WIDTH - DimensionsUtils.getDP(40)) / 2 - DimensionsUtils.getDP(44),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: DimensionsUtils.getDP(18),
  },
  image: {
    tintColor: colors.grey,
    width: DimensionsUtils.getDP(34),
    height: DimensionsUtils.getDP(22),
  },
  orangeBg: {
    marginVertical: DimensionsUtils.getDP(8),
    backgroundColor: colors.orange,
    borderColor: colors.orange,
  },
  whiteBg: {
    backgroundColor: colors.veryLightGrey,
  },
  whiteLabel: {
    color: colors.white,
  },
  whiteTing: {
    tintColor: colors.white,
  },
});

export default Card;
