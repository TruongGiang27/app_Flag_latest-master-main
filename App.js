import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Type from './src/screens/home/type';
import Mode from './src/screens/home/mode';
import Login from './src/screens/login/Login';
import Setting from './src/screens/home/setting';
import Play from './src/screens/home/play';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <Play/> */}
      {/* <Setting/> */}
      <Type/>
      {/* <Mode/> */}
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