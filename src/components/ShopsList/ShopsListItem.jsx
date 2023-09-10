import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';

import {images, sizes} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopsListItem = ({item}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const styles = customStyle(colors);
  const navigation = useNavigation();

  const estimatedTime = `${item?.estimatedTime?.[0]} - ${item.estimatedTime?.[1]} min`;

  const backgroundColor = scheme === 'dark' ? 'grey' : 'white';

  const onItemPress = () =>
    navigation.navigate('Shop', {
      shop: item,
    });

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View>
        <Image source={item.image} style={styles.image} />
        <View style={[styles.timeContainer, {backgroundColor}]}>
          <Text style={styles.time}>{estimatedTime}</Text>
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
    </TouchableOpacity>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    image: {
      width: sizes.WIDTH - DimensionsUtils.getDP(40),
      height: (sizes.WIDTH - 40) / 2,
      borderRadius: DimensionsUtils.getDP(30),
    },
    timeContainer: {
      position: 'absolute',
      bottom: -1,
      borderTopRightRadius: DimensionsUtils.getDP(30),
      borderBottomLeftRadius: DimensionsUtils.getDP(30),
      width: 120,
      alignItems: 'center',
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
      color: colors.black,
      padding: DimensionsUtils.getDP(10),
      fontFamily: 'Poppins-Medium',
    },
    bottomContainer: {
      paddingLeft: DimensionsUtils.getDP(8),
      paddingBottom: DimensionsUtils.getDP(20),
    },
    shopName: {
      color: colors.black,
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
      color: colors.black,
      fontFamily: 'Poppins-Regular',
      marginRight: DimensionsUtils.getDP(8),
    },
    category: {
      color: colors.black,
      fontFamily: 'Poppins-Regular',
    },
    dot: {
      color: colors.orange,
    },
  });

export default ShopsListItem;
