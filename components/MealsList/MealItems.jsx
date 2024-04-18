import {StyleSheet, Text, View, Pressable, Image, Platform} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MealsDetails from '../MealsDeatils';

export default function MealItems({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  method,
}) {
  const navigation = useNavigation();
  function redirectionHandler() {
    navigation.navigate('MealsDetailScreen', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: 'grey'}} onPress={redirectionHandler}>
        <View>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealsDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  detials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
