import React from 'react';
import {MEALS} from '../data/dummy-data';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from './CategoriesScreen';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';

type MealsOverviewProps = RouteProp<RootStackParamList, 'MealsOverview'>;

function MealsOverviewScreen() {
  const route = useRoute<MealsOverviewProps>();
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.find((id) => id === categoryId),
  );

  console.log(displayedMeals);
  function renderMealItem(item: ListRenderItemInfo<Meal>) {
    return <MealItem itemData={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
