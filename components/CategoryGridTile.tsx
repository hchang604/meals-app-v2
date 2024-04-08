import React from 'react';
import {Pressable, Text, View} from 'react-native';

type CategoryGridTileProps = {
  title: string;
  color: string;
};

function CategoryGridTile(props: CategoryGridTileProps) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
