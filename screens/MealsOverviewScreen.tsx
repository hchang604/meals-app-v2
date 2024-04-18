import React, {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from './CategoriesScreen';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';
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

  function renderMealItem(item: ListRenderItemInfo<Meal>) {
    return <MealItem itemData={item} />;
  }

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
