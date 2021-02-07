import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screen/Home/Home';
import Grammary from '../Screen/Grammary/Grammary';
import Alphabet from '../Screen/Grammary/Alphabet';
import ModalVerb from '../Screen/Grammary/ModalVerb';
import DerDieDas from '../Screen/Grammary/DerDieDas';
import PersonalPronounce from '../Screen/Grammary/PersonalPronounce';
import Question from '../Screen/Grammary/Question';
import Numbers from '../Screen/Grammary/Numbers';
import Time from '../Screen/Grammary/Time';
import Articles from '../Screen/Grammary/Articles';
import Cards from '../Screen/Cards/Cards';
import Lessons from '../Screen/Lessons/Lessons';
import Pronounce from '../Screen/Pronounce/Pronounce';
import Test from '../Screen/Test/Test';
import Tips from '../Screen/Tips & Tricks/Tips';

const Stack = createStackNavigator();
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerLeft: ({}) => <HeaderLeft />}}
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
);

const GrammaryStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      // options={{
      //   headerShown: false,
      // }}
      options={{headerLeft: ({}) => <HeaderLeft />}}
      name="Grammary"
      component={Grammary}
    />
    <Stack.Screen name="Der Die Das" component={DerDieDas} />
    <Stack.Screen name="Alphabet" component={Alphabet} />
    <Stack.Screen name="Modal Verb" component={ModalVerb} />
    <Stack.Screen name="Personal Pronounce" component={PersonalPronounce} />
    <Stack.Screen name="Question" component={Question} />
    <Stack.Screen name="Numbers" component={Numbers} />
    <Stack.Screen name="Time" component={Time} />
    <Stack.Screen name="Articles" component={Articles} />
  </Stack.Navigator>
);

const LessonsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerLeft: ({}) => <HeaderLeft />}}
      name="Lessons"
      component={Lessons}
    />
  </Stack.Navigator>
);

const CardsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerLeft: ({}) => <HeaderLeft />}}
      name="Cards"
      component={Cards}
    />
  </Stack.Navigator>
);

const PronounceStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerLeft: ({}) => <HeaderLeft />}}
      name="Pronounce"
      component={Pronounce}
    />
  </Stack.Navigator>
);

const TestStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerLeft: ({}) => <HeaderLeft />}}
      name="Test"
      component={Test}
    />
  </Stack.Navigator>
);

const TipsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerLeft: ({}) => <HeaderLeft />}}
      name="Tips"
      component={Tips}
    />
  </Stack.Navigator>
);

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <View style={styles.menuBox}>
          <View style={styles.menu} />
          <View style={styles.menu} />
          <View style={styles.menu} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        // inactiveBackgroundColor: '#08E8DE',
        // activeBackgroundColor: 'white',
        labelStyle: {
          color: 'rgba(0,0,0,1)',
          fontWeight: '300',
        },
        itemStyle: {
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
        },
        style: {
          paddingTop: '50%',
          backgroundColor: 'white',
        },
      }}
      drawerStyle={{backgroundColor: 'white', width: '70%'}}
      overlayColor={'rgba(0,0,0,0.6)'}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Grammary" component={GrammaryStack} />
      <Drawer.Screen name="Lessons" component={LessonsStack} />
      <Drawer.Screen name="Cards" component={CardsStack} />
      <Drawer.Screen name="Pronounce" component={PronounceStack} />
      <Drawer.Screen name="Test" component={TestStack} />
      <Drawer.Screen name="Tips" component={TipsStack} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  menuBox: {
    width: 30,
    height: 30,
    marginTop: 0,
    marginLeft: 20,
  },
  menu: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    marginVertical: 3,
  },
});

export default Navigation;
