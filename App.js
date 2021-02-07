import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {MainProvider} from './MainContext';
import Tts from 'react-native-tts';

const App = () => {
  Tts.setDefaultLanguage('de-De');
  Tts.setDefaultRate(0.3);
  Tts.addEventListener('tts-finish', () => {});
  Tts.getInitStatus().then(Tts.speak(''), (err) => {
    if (err.code === 'no_engine') {
      Tts.requestInstallData();
    }
  });
  return (
    <NavigationContainer>
      <MainProvider>
        <Navigation />
      </MainProvider>
    </NavigationContainer>
  );
};

export default App;
