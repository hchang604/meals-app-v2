import React, {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from './CategoriesScreen';
import MealsList from '../components/MealList/MealsList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type MealsOverviewProps = RouteProp<RootStackParamList, 'MealsOverview'>;

function MealsOverviewScreen() {
  const route = useRoute<MealsOverviewProps>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.find((id) => id === categoryId),
  );

  /* useLayoutEffect makes transition of setting navigation title look nicer */
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    )?.title;

    if (categoryTitle) {
      navigation.setOptions({
        title: categoryTitle,
      });
    }
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
