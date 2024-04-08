import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoriesGrid from '../components/CategoriesGrid';

export default function CategoriesScreen({navigation}) {
  function renderItem(itemData) {
    function redirectionHandler() {
      navigation.navigate('MealsOverviewScreen', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoriesGrid
        title={itemData.item.title}
        color={itemData.item.color}
        method={redirectionHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}
