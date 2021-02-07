import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {MainContext} from '../../../MainContext';
import Tts from 'react-native-tts';

const ModalVerb = () => {
  return (
    <ScrollView style={styles.container}>
      <Box nmb={0} />
      <Box nmb={1} />
      <Box nmb={2} />
      <Box nmb={3} />
      <Box nmb={4} />
      <Box nmb={5} />
    </ScrollView>
  );
};

const Box = ({nmb}) => {
  return (
    <View style={styles.boxContainer}>
      <Title nmb={nmb} />
      <View style={styles.boxBox}>
        <View>
          <Text style={styles.boxPresent}>Present</Text>
          <Present nmb={nmb} />
        </View>
        <View>
          <Text style={styles.boxSimple}>Simple Past</Text>
          <Simple nmb={nmb} />
        </View>
      </View>
    </View>
  );
};

const Title = ({nmb}) => {
  const {value1} = useContext(MainContext);
  const [stateValue] = value1;
  return (
    <View style={styles.titleContainer}>
      <Text>
        <Text style={styles.title}>German:</Text> "{stateValue[nmb].german}"
      </Text>
      <Text>
        <Text style={styles.title}>English:</Text> "{stateValue[nmb].english}"
      </Text>
      <Text>
        <Text style={styles.title}>Usage:</Text> "{stateValue[nmb].usage}"
      </Text>
    </View>
  );
};

const Present = ({nmb}) => {
  const {value1} = useContext(MainContext);
  const [stateValue] = value1;
  const list = stateValue[nmb].present;
  return (
    <FlatList
      data={list}
      initialNumToRender={15}
      renderItem={({item}) => (
        <View>
          <TouchableOpacity
            style={styles.presentButton}
            onPress={() => Tts.speak(item.german)}>
            <Text style={styles.germanItalic}>{item.german}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const Simple = ({nmb}) => {
  const {value1} = useContext(MainContext);
  const [stateValue] = value1;
  const list = stateValue[nmb].simplePast;
  return (
    <FlatList
      data={list}
      initialNumToRender={15}
      renderItem={({item}) => (
        <View>
          <TouchableOpacity
            style={styles.presentButton}
            onPress={() => Tts.speak(item.german)}>
            <Text style={styles.germanItalic}>{item.german}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc',
  },
  boxContainer: {
    marginVertical: 10,
  },
  boxBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  boxPresent: {
    fontSize: 23,
    fontWeight: '400',
    marginBottom: 10,
  },
  boxSimple: {
    fontSize: 23,
    fontWeight: '400',
    marginBottom: 10,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 70,
  },
  title: {
    fontWeight: '700',
    padding: 10,
  },
  presentButton: {
    backgroundColor: 'lightgray',
    margin: 2,
    padding: 10,
  },
  germanItalic: {
    fontStyle: 'italic',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ModalVerb;
