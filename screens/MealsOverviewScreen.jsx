import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealItems from '../components/MealItems';

export default function MealsOverviewScreen({route}) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealsItem => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProp = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };
    return <MealItems {...mealItemProp} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
