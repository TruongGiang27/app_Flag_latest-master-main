import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import Type from './src/screens/home/type';
import Mode from './src/screens/home/mode';
import Login from './src/screens/login/Login';
import Setting from './src/screens/home/setting';
import Gameplay from './src/screens/home/gameplay';
import Gameplaywithflag from './src/screens/home/gameplaywithflag';
import Gamehard from './src/screens/home/gamehard';
import Gamehardwithflag from './src/screens/home/gamehard';


// import Home from './src/screens/home/home';
import Play from './src/screens/home/play';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <Play/>
      {/* <Setting/> */}
      {/* <Type/> */}
      {/* <Mode/> */}
      {/* <Gameplay/> */}
      {/* <Gameplaywithflag/> */}
      {/* <Gamehard/> */}
      {/* <Gamehardwithflag/> */}


      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'FaFbFa',
    alignItems: 'center',
    justifyContent: 'center',
  },
})