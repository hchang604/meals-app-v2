import React from 'react';
import Meal from '../models/meal';
import {
  Image,
  ListRenderItemInfo,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type MealItemProps = {
  itemData: ListRenderItemInfo<Meal>;
};

function MealItem(props: MealItemProps) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [pressed ? styles.buttonPressed : null]}>
        <View>
          <View>
            <Image
              style={styles.image}
              source={{uri: props.itemData.item.imageUrl}}
            />
            <Text style={styles.title}>{props.itemData.item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>
              {props.itemData.item.duration}m
            </Text>
            <Text style={styles.detailItem}>
              {props.itemData.item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {props.itemData.item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    /* Android specific properties */
    elevation: 4,
    /* iOS specific properties */
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
