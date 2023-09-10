import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import CategoriesListItem from './CategoriesListItem';
import {categories} from '../../assets/data/categories';

const CategoriesList = () => {
  const [selectedItem, setSelectedItem] = useState(categories[0]);

  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => (
          <CategoriesListItem
            item={item}
            index={index}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}
      />
    </View>
  );
};

export default CategoriesList;
