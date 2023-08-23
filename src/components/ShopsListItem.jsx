import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import {colors, images} from '../constants';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const {width} = Dimensions.get('screen');

const ShopsListItem = ({item}) => {
  return (
    <View>
      <View>
        <Image source={item.image} style={styles.image} />
        <View style={styles.timeContainer}>
          <Text
            style={
              styles.time
            }>{`${item?.estimatedTime?.[0]} - ${item.estimatedTime?.[1]} min`}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.shopName}>{item.name}</Text>
        <View style={styles.starRow}>
          <Image source={images.star} style={styles.star} />
          <Text style={styles.rate}>{item.rate}</Text>
          {item.category.map((item, index) => (
            <Text key={`dot-${index}`}>
              <Text style={styles.category}>{item}</Text>
              <Text style={styles.dot}> · </Text>
            </Text>
          ))}
          {[1, 2, 3].map((rates, index) => (
            <Text
              key={`rate-${index}`}
              style={{
                color: rates <= item.price ? colors.black : colors.grey,
              }}>
              $
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width - DimensionsUtils.getDP(40),
    height: DimensionsUtils.getDP((width - 40) / 2),
    borderRadius: DimensionsUtils.getDP(30),
  },
  timeContainer: {
    position: 'absolute',
    bottom: -1,
    borderTopRightRadius: DimensionsUtils.getDP(30),
    borderBottomLeftRadius: DimensionsUtils.getDP(30),
    width: DimensionsUtils.getDP(120),
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  time: {
    padding: DimensionsUtils.getDP(10),
    fontFamily: 'Poppins-Medium',
  },
  bottomContainer: {
    paddingLeft: DimensionsUtils.getDP(8),
    paddingBottom: DimensionsUtils.getDP(20),
  },
  shopName: {
    paddingTop: DimensionsUtils.getDP(16),
    paddingBottom: DimensionsUtils.getDP(8),
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getFontSize(20),
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    tintColor: colors.orange,
    width: DimensionsUtils.getDP(16),
    height: DimensionsUtils.getDP(16),
    marginRight: DimensionsUtils.getDP(8),
  },
  rate: {
    fontFamily: 'Poppins-Regular',
    marginRight: DimensionsUtils.getDP(8),
  },
  category: {
    fontFamily: 'Poppins-Regular',
  },
  dot: {
    color: colors.orange,
  },
});

export default ShopsListItem;
