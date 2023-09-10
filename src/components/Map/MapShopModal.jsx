import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, Image, StyleSheet, useColorScheme} from 'react-native';

import Button from '../Common/Button';
import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const MapShopModal = ({shop}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const styles = customStyle(colors);

  const backgroundColor = scheme === 'light' ? colors.white : 'black';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      {/* First row */}
      <View style={styles.row}>
        <Image source={shop.image} style={styles.shopImage} />
        <View style={styles.afterImgContainer}>
          <View style={styles.nameStarContainer}>
            <Text style={styles.shopName}>{shop?.name}</Text>
            <View style={styles.row}>
              <Image source={images.star} style={styles.star} />
              <Text style={styles.rate}>{shop.rate}</Text>
            </View>
          </View>
          <View style={[styles.row, styles.alignCenter]}>
            {shop?.category?.map((cat, index) => (
              <React.Fragment key={`map-cat-${index}`}>
                <Text style={styles.categories}>{cat}</Text>
                {index !== shop?.category?.length - 1 && (
                  <Text style={{color: colors.orange}}> · </Text>
                )}
              </React.Fragment>
            ))}
          </View>
        </View>
      </View>

      {/* Button */}
      <Button label={'Call'} containerStyle={styles.buttonContainer} />
    </View>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    alignCenter: {
      alignItems: 'center',
    },
    container: {
      borderRadius: DimensionsUtils.getDP(16),
      paddingHorizontal: DimensionsUtils.getDP(16),
      paddingVertical: DimensionsUtils.getDP(20),
    },
    shopImage: {
      width: DimensionsUtils.getDP(52),
      height: DimensionsUtils.getDP(52),
      borderRadius: DimensionsUtils.getDP(24),
    },
    shopName: {
      color: colors.black,
      fontFamily: 'Poppins-SemiBold',
      fontSize: DimensionsUtils.getFontSize(16),
    },
    afterImgContainer: {
      flex: 1,
      marginLeft: DimensionsUtils.getDP(16),
    },
    nameStarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    star: {
      top: 2,
      marginRight: DimensionsUtils.getDP(8),
      tintColor: colors.orange,
      width: DimensionsUtils.getDP(16),
      height: DimensionsUtils.getDP(16),
    },
    rate: {
      color: colors.black,
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getFontSize(16),
    },
    categories: {
      color: colors.grey,
      fontFamily: 'Poppins-Regular',
      marginTop: DimensionsUtils.getDP(2),
    },
    buttonContainer: {
      marginHorizontal: 0,
      marginTop: DimensionsUtils.getDP(16),
    },
  });

export default MapShopModal;
