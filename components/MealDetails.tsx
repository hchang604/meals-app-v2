import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Meal from '../models/meal';

type MealDetailsProps = {
  itemData: Meal;
};

function MealDetails(props: MealDetailsProps) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{props.itemData.duration}m</Text>
      <Text style={styles.detailItem}>
        {props.itemData.complexity.toUpperCase()}
      </Text>
      <Text style={styles.detailItem}>
        {props.itemData.affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'white',
  },
});
