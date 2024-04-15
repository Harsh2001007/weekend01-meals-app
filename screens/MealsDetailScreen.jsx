import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {MEALS} from '../data/dummy-data';
import MealsDeatils from '../components/MealsDeatils';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function MealsDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const headerAddBtn = () => {
    console.log('added to favorite');
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={headerAddBtn}
            style={({pressed}) => pressed && styles.applyStyle}>
            <FontAwesome name={'bookmark-o'} size={28} color={'white'} />
          </Pressable>
        );
      },
    });
  }, [navigation, headerAddBtn]);

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
        <View style={{marginBottom: 30}}>
          <Button
            title="Click me"
            onPress={() => {
              navigation.navigate('DrawerScreen');
            }}
          />
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
  applyStyle: {
    opacity: 0.5,
    marginRight: 10,
  },
});
