import React from 'react'
import { View, Text, StyleSheet,TextInput,Image } from 'react-native'
export default function Card({
    decription='Lagunitas ipa '
}) {
  return (
    <>
    <View style={styles.card}>
    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"#c3b9ad"}}>23</Text>    
        <Image style={{width:30,height:100,resizeMode:"contain"}} source={require('../../assets/images/wine6.png')} />
        <Image style={{width:30,height:30,resizeMode:"contain"}} source={require('../../assets/images/scan.png')} />
    </View>   
    <Text style={styles.text0}>{decription}<Text style={{color:'#e74a07'}}>$6.00</Text ></Text>
    <View style={{flexDirection:"row",marginVertical:6}}>
        <View style={{backgroundColor:"#f3e7db",borderRadius:4,paddingHorizontal:4,paddingVertical:2}}>
            <Text style={styles.text1}>Alc 4.2</Text>
        </View>
        <View style={{backgroundColor:"#f3e7db",marginLeft:10,borderRadius:4,paddingHorizontal:4,paddingVertical:2}}>
            <Text style={styles.text1}>300ml</Text>
        </View>
    </View>
    </View>     
    </>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#fcf2e8",
        paddingHorizontal:14,
        paddingVertical:10,
        borderRadius:10,
        elevation:2,
        shadowColor:"#fff",
        shadowOpacity:0.9,
    },
    text1:{
        color:"#7f705d",
        fontSize:10,
    },
    text0:{
        color:"#000000",
        fontWeight:"bold",
        fontSize:12,
        paddingTop:10
    },
})