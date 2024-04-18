import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React from 'react';
import MealItems from './MealItems';

export default function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProp = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };
    return <MealItems {...mealItemProp} />;
  }
  return (
    <Pressable style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
