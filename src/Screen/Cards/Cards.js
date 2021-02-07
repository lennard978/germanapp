import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

export const Cards = () => {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text>Cards</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewOntainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cards;
