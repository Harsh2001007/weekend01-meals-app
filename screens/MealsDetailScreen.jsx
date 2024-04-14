import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealsDeatils from '../components/MealsDeatils';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

export default function MealsDetailScreen({route}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDeatils
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textDiff}
      />
      <View style={{alignItems: 'center'}}>
        <View style={{width: '80%', justifyContent: 'center'}}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    color: 'white',
    textAlign: 'center',
  },
  textDiff: {
    color: 'white',
  },
});
