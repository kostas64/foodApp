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
    <View>
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
              style={[styles.container, {backgroundColor}]}>
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
  container: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 36,
    marginRight: 8,
  },
  imageContainer: {
    padding: 16,
    borderRadius: 28,
  },
  image: {
    height: 26,
    width: 26,
  },
  label: {
    marginTop: 8,
    marginBottom: 16,
    fontWeight: '500',
  },
});

export default CategoriesList;
