import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
width=Dimensions.get('screen').width
height=Dimensions.get('screen').height
const Total = () => {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <ImageBackground style={styles.image} source={require('../../../assets/Play.png')} resizeMode="cover" >
                        
                    <View style={styles.champ}>
                        <Image style={styles.cup} source={require('../../../assets/cup.png')} />
                    </View>

                    <View style={styles.champ}>
                        <Image style={styles.mvp} source={require('../../../assets/mvp.png')} />
                    </View>

                    <View style={styles.score}>
                            <Text style={styles.uscore}> Your score 50</Text>
                    </View>


                    <View style={styles.home}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.uscore1}> HOME </Text>
                        </TouchableOpacity>

                   
                    </View>

                    <View style={styles.home}>
         

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.uscore1}> SCORE BOARD </Text>
                        </TouchableOpacity>

                    
                    </View>

                    <View style={styles.home}>
                    

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.uscore1}> Play again </Text>
                        </TouchableOpacity>
                    </View>
                    
                </ImageBackground>
            </View>
        </View>
    )
}

export default Total

const styles = StyleSheet.create({
btn:{

},
// center:{
// alignItems:'center',
// },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    champ: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cup: {
        width: '45%',
        height: '45%',
        bottom:30,
    },
    mvp: {
        width: 126,
        height: 65,
        elevation: 1,
        bottom: 104,
    },
    score: {
        bottom: 130,
        alignItems: 'center',
    },
    uscore: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '600',
        color: '#FAFAFA',
        backgroundColor: '#6A39A9',
        width: '70%',
        paddingVertical: 20,
        borderRadius: 10,
    },

    home: {
        flex:1,
     width: '50%',
    left:'25%',
    bottom:'10%',
    },

    uscore1: {
        lineHeight:50,
        textAlign: 'center',
        fontSize: 30,
        color: '#FAFAFA',
        fontWeight: '600',
        backgroundColor: '#6A39A9',
        paddingVertical: 20,
        borderRadius: 10,
    }
})