import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealsDeatils from '../components/MealsDeatils';

export default function MealsDetailScreen({route}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDeatils
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textDiff}
      />

      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>

      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map(steps => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
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
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6,
  },
  subContainer: {
    borderColor: 'white',
    borderBottomWidth: 2,
    marginHorizontal: 28,
  },
});
