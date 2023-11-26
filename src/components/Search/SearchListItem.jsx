import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const SearchListItem = ({item}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const styles = customStyles(colors);

  const estimatedLabel = (val, key) => `${`${val}'`}${key === 0 ? ' - ' : ''}`;

  const onItemPress = () =>
    navigation.navigate('Shop', {
      shop: item,
      from: 'Search',
    });

  return (
    <TouchableOpacity onPress={onItemPress} style={styles.container}>
      <Image source={item.image} style={styles.img} />
      <View style={styles.rightContainer}>
        <Text style={styles.shopName}>{item.name}</Text>
        <View style={styles.rightBottomContainer}>
          <Image source={images.clock} style={styles.clock} />
          <View style={styles.rightBottomInnerContainer}>
            {item.estimatedTime.map((val, key) => (
              <Text key={key} style={styles.estimatedLabel}>
                {estimatedLabel(val, key)}
              </Text>
            ))}

            {item.category.map((nested, index) => (
              <Text key={`dot-${index}`} style={styles.marginLeft}>
                <Text style={styles.dot}> · </Text>
                <Text style={styles.category}>{nested}</Text>
                {index === item.category?.length - 1 && (
                  <Text style={styles.dot}> · </Text>
                )}
              </Text>
            ))}

            <View style={styles.priceContainer}>
              {[1, 2, 3].map((rates, index) => (
                <Text
                  key={`rate-${index}`}
                  style={[
                    styles.priceLabel,
                    {color: rates <= item.price ? colors.black : colors.grey},
                  ]}>
                  $
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchListItem;

const customStyles = colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: DimensionsUtils.getDP(8),
    },
    img: {
      width: DimensionsUtils.getDP(42),
      height: DimensionsUtils.getDP(42),
      borderRadius: DimensionsUtils.getDP(9),
    },
    rightContainer: {
      marginLeft: DimensionsUtils.getDP(8),
    },
    rightBottomContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightBottomInnerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: DimensionsUtils.getDP(4),
    },
    shopName: {
      height: 22,
      color: colors.text,
      fontSize: DimensionsUtils.getFontSize(16),
      fontFamily: 'Poppins-Medium',
    },
    clock: {
      top: 1,
      tintColor: '#c3c3c3',
      width: DimensionsUtils.getDP(12),
      height: DimensionsUtils.getDP(12),
    },
    estimatedLabel: {
      color: colors.text,
      height: DimensionsUtils.getDP(14),
      fontSize: DimensionsUtils.getFontSize(12),
      fontFamily: 'Poppins-Regular',
    },
    category: {
      color: colors.black,
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getDP(12),
    },
    dot: {
      color: colors.orange,
    },
    marginLeft: {
      marginLeft: DimensionsUtils.getDP(4),
    },
    priceContainer: {
      marginLeft: DimensionsUtils.getDP(4),
      flexDirection: 'row',
    },
    priceLabel: {
      height: DimensionsUtils.getDP(12),
      fontSize: DimensionsUtils.getFontSize(10),
    },
  });
