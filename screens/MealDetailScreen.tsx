import React, {useCallback, useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from './CategoriesScreen';
import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';
import {addFavorite, removeFavorite} from '../store/favoritesSlice';
import {useAppDispatch, useAppSelector} from '../store/store';

type MealDetailScreen = RouteProp<RootStackParamList, 'MealDetail'>;

function MealDetailScreen() {
  const route = useRoute<MealDetailScreen>();
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const favoriteMealsIds = useAppSelector((state) => state.favoriteMeals.ids);
  const dispatch = useAppDispatch();

  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  const toggleFavoriteStatus = useCallback(() => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({id: mealId}));
    } else {
      dispatch(addFavorite({id: mealId}));
    }
  }, [dispatch, mealId, mealIsFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={toggleFavoriteStatus}
          />
        );
      },
    });
  }, [mealIsFavorite, navigation, toggleFavoriteStatus]);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found!</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails itemData={selectedMeal} />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {selectedMeal.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listItem}>
              <Text style={styles.listItemText}>{ingredient}</Text>
            </View>
          ))}

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {selectedMeal.steps.map((step) => (
            <View key={step} style={styles.listItem}>
              <Text style={styles.listItemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  listItemText: {
    color: '#351401',
    textAlign: 'center',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
