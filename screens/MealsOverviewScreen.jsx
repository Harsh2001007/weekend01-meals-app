import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealItems from '../components/MealsList/MealItems';
import MealsDetails from '../components/MealsDeatils';
import MealsList from '../components/MealsList/MealsList';

export default function MealsOverviewScreen({route}) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealsItem => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  });
  return <MealsList items={displayedMeals} />;
}
