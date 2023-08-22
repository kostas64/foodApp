import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {colors} from '../constants';
import {categories} from '../assets/data/categories';

const CategoriesList = () => {
  const [selectedItem, setSelectedItem] = useState(categories[0]);

  return (
    <View style={styles.viewContainer}>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          const backgroundColor =
            selectedItem.id === index ? colors.orange : colors.white;
          const itemCircleColor =
            selectedItem.id === index ? colors.white : colors.lightGrey;
          const labelColor =
            selectedItem.id === index ? colors.white : colors.black;

          return (
            <TouchableOpacity
              onPress={() => setSelectedItem(categories[index])}
              style={[styles.listContainer, {backgroundColor}]}>
              <View
                style={[
                  styles.imageContainer,
                  {
                    backgroundColor: itemCircleColor,
                  },
                ]}>
                <Image source={item.image} style={styles.image} />
              </View>
              <Text
                style={[
                  styles.label,
                  {
                    color: labelColor,
                  },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    marginLeft: 16,
  },
  listContainer: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 36,
    marginRight: 12,
    marginLeft: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  imageContainer: {
    padding: 14,
    borderRadius: 28,
  },
  image: {
    height: 24,
    width: 24,
  },
  label: {
    marginTop: 8,
    marginBottom: 16,
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default CategoriesList;
