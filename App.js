import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import LipList from './components/LipList';


export default function App() {
  return (
   <View style={styles.container} >


    {/* <LipItem name={"Kinda Sexy"}
    description={"Shimmery Lipstick $19.99"} 
    image={require('./assets/Mac1.jpg')}></LipItem>  */}

    <LipList></LipList>

    <StatusBar style="auto"></StatusBar>
  </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: 'center',
    justifyContent: 'center',
  }
});