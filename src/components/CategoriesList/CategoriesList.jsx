import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import CategoriesListItem from './CategoriesListItem';
import {categories} from '../../assets/data/categories';

const CategoriesList = ({scrollY}) => {
  const [selectedItem, setSelectedItem] = useState(categories[0]);

  const renderItem = ({item, index}) => (
    <CategoriesListItem
      item={item}
      index={index}
      scrollY={scrollY}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    />
  );

  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CategoriesList;
