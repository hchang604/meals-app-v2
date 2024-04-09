import React from 'react';
import Meal from '../models/meal';
import {ListRenderItemInfo, Text, View} from 'react-native';

type MealItemProps = {
  itemData: ListRenderItemInfo<Meal>;
};

function MealItem(props: MealItemProps) {
  return (
    <View>
      <Text>{props.itemData.item.title}</Text>
    </View>
  );
}

export default MealItem;
