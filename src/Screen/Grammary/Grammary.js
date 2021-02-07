import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {data} from './data';

export const Grammary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Item navigation={navigation.navigate} />
    </View>
  );
};

const Item = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={data}
        initialNumToRender={15}
        horisontal={false}
        numColumns={3}
        renderItem={({item}) => (
          <View style={[styles.box, {backgroundColor: item.backColor}]}>
            <TouchableOpacity onPress={() => navigation(item.name)}>
              <Text style={styles.german}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff8dc',
  },
  box: {
    flex: 1,
    maxWidth: Dimensions.get('window').width / 3 - 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 100,
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  header: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 30,
  },
  german: {
    fontWeight: '400',
    marginBottom: 5,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default Grammary;
