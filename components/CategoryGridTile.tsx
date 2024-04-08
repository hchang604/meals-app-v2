import React from 'react';
import {Pressable, Text, View, StyleSheet, Platform} from 'react-native';

type CategoryGridTileProps = {
  title: string;
  color: string;
  onPress: () => void;
};

function CategoryGridTile(props: CategoryGridTileProps) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: '#ccc', borderless: true}}
        onPress={props.onPress}>
        <View style={[styles.innerContainer, {backgroundColor: props.color}]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    /* Android specific properties */
    elevation: 4,
    /* iOS specific properties */
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
