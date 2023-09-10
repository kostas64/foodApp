import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import GmoModal from '../Modals/GmoModal';
import GlutenModal from '../Modals/GlutenModal';
import LactoseModal from '../Modals/LactoseModal';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const ShopTags = ({modalRef, setModalContent, productCategories}) => {
  const {colors} = useTheme();
  const styles = customStyle(colors);

  const setModalBasedOnTag = React.useCallback(type => {
    type === 'GMO' && setModalContent(<GmoModal />);
    type === 'Gluten' && setModalContent(<GlutenModal />);
    type === 'Lactose' && setModalContent(<LactoseModal />);
  }, []);

  return (
    <>
      {productCategories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setModalBasedOnTag(item);
            modalRef.current.animateModal();
          }}
          style={[
            styles.container,
            {
              marginRight:
                index !== productCategories.length - 1
                  ? DimensionsUtils.getDP(8)
                  : 0,
            },
          ]}>
          <Text style={styles.label}>{item}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.orange,
      borderRadius: DimensionsUtils.getDP(16),
      paddingHorizontal: DimensionsUtils.getDP(8),
      paddingVertical: DimensionsUtils.getDP(4),
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 5,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      elevation: 5,
    },
    label: {
      fontSize: DimensionsUtils.getDP(12),
      color: 'white',
    },
  });

export default ShopTags;
