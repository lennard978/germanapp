import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {MainContext} from '../../../MainContext';

const PersonalPronounce = () => {
  const {value2} = useContext(MainContext);
  const [stateValue] = value2;
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff8dc'}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Personal Pronouns</Text>
        </View>
        <View style={styles.box}>
          <View>
            <Text style={styles.headerBox}>Person</Text>
            <FlatList
              data={stateValue}
              initialNumToRender={15}
              renderItem={({item}) => (
                <View>
                  <Text style={[styles.globalMargin, styles.globalBold]}>
                    {item.english}
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View>
            <Text style={styles.headerBox}>Nom.</Text>
            <Item list={[0]} />
          </View>
          <View>
            <Text style={styles.headerBox}>Acc.</Text>
            <Item list={[1]} />
          </View>
          <View>
            <Text style={styles.headerBox}>Dat.</Text>
            <Item list={[2]} />
          </View>
          <View>
            <Text style={styles.headerBox}>Gen.</Text>
            <Item list={[3]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const Item = ({list}) => {
  const {value2} = useContext(MainContext);
  const [stateValue] = value2;
  return (
    <FlatList
      data={stateValue}
      initialNumToRender={15}
      renderItem={({item}) => (
        <View>
          <TouchableOpacity style={[styles.globalMargin, styles.globalItalic]}>
            <Text>{item.german[list]}</Text>
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
    alignItems: 'center',
    backgroundColor: '#fff8dc',
  },
  header: {
    marginVertical: 50,
    fontSize: 30,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
    backgroundColor: '#ffebcd',
  },
  personBox: {
    flexDirection: 'column',
  },
  globalMargin: {
    marginVertical: 5,
    padding: 5,
  },
  globalItalic: {
    fontStyle: 'italic',
  },
  globalBold: {
    fontWeight: 'bold',
  },
  globalUpper: {
    textTransform: 'uppercase',
  },
  headerBox: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginVertical: 5,
    padding: 5,
  },
});

export default PersonalPronounce;
