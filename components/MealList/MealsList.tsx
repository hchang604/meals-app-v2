import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import MealItem from '../MealList/MealItem';
import Meal from '../../models/meal';

type MealsListProps = {
  items: Meal[];
};

function MealsList(props: MealsListProps) {
  function renderMealItem(item: ListRenderItemInfo<Meal>) {
    return <MealItem itemData={item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
