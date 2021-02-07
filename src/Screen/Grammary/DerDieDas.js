import React from 'react';
import {useContext} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {MainContext} from '../../../MainContext';
import Tts from 'react-native-tts';

const DerDieDas = () => {
  const {value} = useContext(MainContext);
  const [stateValue] = value;
  const list = stateValue.map((item) => (
    <View style={styles.box}>
      <View style={[styles.nameBox]}>
        <Text style={[styles.nameText, {color: item.colorText}]}>
          {item.name}
        </Text>
      </View>
      <View style={styles.fixBox}>
        {item.fix.map((index) => (
          <View style={[styles.fixItemBox, {backgroundColor: item.back}]}>
            <Text style={styles.sufixText}>-{index.sufix}</Text>
          </View>
        ))}
      </View>
      <View style={styles.itemNameContainer}>
        {item.fix.map((index) => (
          <View style={styles.itemNameBox}>
            <TouchableOpacity
              onPress={() => Tts.speak(item.name + index.word + index.sufix)}>
              <Text style={styles.itemNameText}>
                <Text style={{color: item.colorText}}>{item.name}</Text>{' '}
                <Text>
                  {index.word}
                  <Text style={{color: item.colorText}}>-{index.sufix}</Text>
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  ));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.listBox}>{list}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff8dc',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  listBox: {
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
  },
  nameBox: {
    justifyContent: 'center',
    width: '15%',
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  nameText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  fixBox: {
    width: '25%',
  },
  fixItemBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderRightWidth: 1,
    borderRightColor: 'lightgray',
  },
  sufixText: {
    padding: 8,
    textTransform: 'uppercase',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  itemNameContainer: {
    flexGrow: 3,
  },
  itemNameBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderLeftWidth: 1,
    borderLeftColor: 'black',
  },
  itemNameText: {
    padding: 8,
  },
});

export default DerDieDas;
