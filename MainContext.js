import React, {createContext} from 'react';
import {tableDerDiaDas} from './src/Data/tableDerDieDas';
import {modalVerbs} from './src/Data/modalVerbs';
import {personalPronounce} from './src/Data/personalPronounce';
import {question} from './src/Data/question';

export const MainContext = createContext();

export const MainProvider = ({children}) => {
  return (
    <MainContext.Provider
      value={{
        value: [tableDerDiaDas],
        value1: [modalVerbs],
        value2: [personalPronounce],
        value3: [question],
      }}>
      {children}
    </MainContext.Provider>
  );
};
