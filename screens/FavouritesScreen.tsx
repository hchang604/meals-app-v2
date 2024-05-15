import React from 'react';
import MealsList from '../components/MealList/MealsList';
import {MEALS} from '../data/dummy-data';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../store/store';

function FavouritesScreen() {
  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favorite Meals yet</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
