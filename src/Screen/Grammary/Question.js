import React, {useContext} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Tts from 'react-native-tts';
import {MainContext} from '../../../MainContext';

const Question = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>12 Question's in German</Text>
      <Item />
      <Text style={styles.read}>
        Press on German word to hear how to pronounce.
      </Text>
    </View>
  );
};

const Item = () => {
  const {value3} = useContext(MainContext);
  const [stateValue] = value3;
  return (
    <View>
      <FlatList
        data={stateValue}
        initialNumToRender={15}
        horisontal={false}
        numColumns={3}
        renderItem={({item}) => (
          <View style={[styles.box, {backgroundColor: item.backColor}]}>
            <TouchableOpacity onPress={() => Tts.speak(item.german)}>
              <Text style={styles.german}>{item.german}</Text>
            </TouchableOpacity>
            <Text style={styles.english}>{item.english}</Text>
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
    fontWeight: '300',
    marginBottom: 5,
    fontSize: 22,
  },
  english: {
    fontWeight: '100',
    fontStyle: 'italic',
    fontSize: 18,
  },
  read: {
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Question;
