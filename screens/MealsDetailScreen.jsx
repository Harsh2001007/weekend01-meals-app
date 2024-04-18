import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import {MEALS} from '../data/dummy-data';
import MealsDeatils from '../components/MealsDeatils';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FavoritesContext} from '../store/context/favorites-context';

export default function MealsDetailScreen({route, navigation}) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorites(mealId);
      console.log('removed');
    } else {
      favoriteMealsCtx.addFavorites(mealId);
      console.log('added');
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={changeFavoriteStatusHandler}
            style={({pressed}) => pressed && styles.applyStyle}>
            <FontAwesome
              name={'bookmark-o'}
              size={28}
              color={mealIsFavorite ? 'red' : 'white'}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

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
        <View style={{marginBottom: 30}}></View>
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
  applyStyle: {
    opacity: 0.5,
  },
});
