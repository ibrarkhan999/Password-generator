import { View,  StyleSheet, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import PasswordG from './src/PasswordG';


export default function App() {
  
  return (
    <SafeAreaView style={styles.main}>
    <ScrollView>
    <StatusBar barStyle="light-content" backgroundColor="black" />

    <PasswordG/>

    </ScrollView>
    </SafeAreaView>
      
  

  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#0f172a',
    // backgroundColor: 'black',
  }

});
