import React from 'react';
import Meal from '../../models/meal';
import {
  Image,
  ListRenderItemInfo,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../screens/CategoriesScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MealDetails from '../MealDetails';

type MealItemProps = {
  itemData: ListRenderItemInfo<Meal>;
};

function MealItem(props: MealItemProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function selectMealItemhandler() {
    navigation.navigate('MealDetail', {mealId: props.itemData.item.id});
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        onPress={selectMealItemhandler}
        style={({pressed}) => [pressed ? styles.buttonPressed : null]}>
        <View>
          <View>
            <Image
              style={styles.image}
              source={{uri: props.itemData.item.imageUrl}}
            />
            <Text style={styles.title}>{props.itemData.item.title}</Text>
          </View>
          <MealDetails itemData={props.itemData.item} />
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
