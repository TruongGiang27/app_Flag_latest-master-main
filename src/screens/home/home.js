import { Image, Dimensions, View, Text, StyleSheet } from 'react-native';
import React from 'react'
// const image = { uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg' };
const Home = () => {
  return (
    <View style={style.body}>
    <View>
      <View style={style.buttonContent}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png' }} style={style.img} />
              <Text>Login with google</Text>
            </View>
    </View>
    </View>

  )
}

export default Home
const style = StyleSheet.create({
  body: {
    flex:1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    width: Dimensions.get('screen').width,
  },
  text: {
    width: 350,
    height: 50,
    position: 'absolute',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 500,
    justifyContent: 'center',
  }
});
