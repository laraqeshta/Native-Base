import { StatusBar } from 'expo-status-bar';
//import { Header } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductContainer from './Screens/Products/ProductContainer';
import Head from './Shared/Head';


export default function App() {
  return (
    <View style={styles.container}>
      <Head />
      <ProductContainer/>


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
