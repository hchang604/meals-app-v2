import React from 'react';
import {Image, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from './CategoriesScreen';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';

type MealDetailScreen = RouteProp<RootStackParamList, 'MealDetail'>;

function MealDetailScreen() {
  const route = useRoute<MealDetailScreen>();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <View>
      <Image source={{uri: selectedMeal?.imageUrl}} />
      <Text>{selectedMeal?.title}</Text>
      <MealDetails itemData={selectedMeal} />

      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;
