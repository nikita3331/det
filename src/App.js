import React,{useState} from 'react';
import {StyleSheet,Text,TouchableOpacity,SafeAreaView} from 'react-native';

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { Provider, useSelector } from 'react-redux'
import Navigator from './navigator'
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware) 

const App=() => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}} edges={['right', 'top', 'left']}>
        <Navigator/>
      </SafeAreaView>
  </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
