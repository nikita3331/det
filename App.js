/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




const App=() => {
  const [buttVal,SetButtVal]=useState(0)
  return (
    <View>
      <Text testID="welcomeText">Hello!</Text>
      <TouchableOpacity testID="button1" onPress={()=>{SetButtVal(buttVal+1)}}>
        <Text testID="buttText">{buttVal}</Text>
      </TouchableOpacity>
    </View>


    

  );
};

const styles = StyleSheet.create({

});

export default App;
