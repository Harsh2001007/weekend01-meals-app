import {StyleSheet, Text, View, Pressable, Platform} from 'react-native';
import React from 'react';

export default function CategoriesGrid({title, color, method}) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={styles.button}
        onPress={method}>
        <View style={styles.innerContainer}>
          <Text style={{color: 'black', fontWeight: 600}}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
});
