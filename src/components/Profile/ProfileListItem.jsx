import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';

import {images} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const {width} = Dimensions.get('screen');

const ProfileListItem = ({item, isLast}) => {
  const {colors} = useTheme();
  const styles = customStyle(colors);
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => item.onPress(navigation)}
        style={[styles.container, styles.rowCenter]}>
        <View style={styles.rowCenter}>
          <Image
            source={item.icon}
            style={[styles.image, styles.marginRight]}
          />
          <Text style={styles.label}>{item.label}</Text>
        </View>
        <Image source={images.arrowLong} style={styles.image} />
      </TouchableOpacity>
      {!isLast && <View style={styles.hr} />}
    </>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      justifyContent: 'space-between',
      height: DimensionsUtils.getDP(58),
    },
    image: {
      tintColor: colors.orange,
      width: DimensionsUtils.getDP(20),
      height: DimensionsUtils.getDP(20),
    },
    label: {
      color: colors.text,
      fontFamily: 'Poppins-Regular',
    },
    hr: {
      left: DimensionsUtils.getDP(36),
      width: width - DimensionsUtils.getDP(76),
      height: 1,
      backgroundColor: colors.orange,
    },
    marginRight: {
      marginRight: DimensionsUtils.getDP(16),
    },
  });

export default ProfileListItem;
