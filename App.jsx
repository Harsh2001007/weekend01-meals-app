import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
