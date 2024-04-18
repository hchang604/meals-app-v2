import React from 'react';
import {Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from './CategoriesScreen';

type MealDetailScreen = RouteProp<RootStackParamList, 'MealDetail'>;

function MealDetailScreen() {
  const route = useRoute<MealDetailScreen>();
  const mealId = route.params.mealId;

  return <Text>This is the meal detail screen</Text>;
}

export default MealDetailScreen;
