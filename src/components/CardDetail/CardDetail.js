import React from 'react'
import { View, Text, StyleSheet, TextInput,Image } from 'react-native'
export default function CardDetail({
    decription = 'GUINNESS',
    number = '',
    image = require('../../assets/images/wine3.png')
}) {
    return (
        <>
            <View style={styles.card}>
                <View style={styles.row}>
                    <View style={{ backgroundColor: "#fef2e6", paddingVertical: 4, paddingHorizontal: 20, elevation: 2, }}>
                    <Image style={{width:30,height:88,}} source={image} />
                    </View>
                    <View style={{paddingLeft:10,flex:1}}>
                        <Text style={styles.textD}><Text style={{ color: "#c5b9ab", fontWeight: "bold" }}>{number}</Text> {decription}</Text>
                        <View style={{ marginVertical: 6 }}>
                            <View style={{ backgroundColor: "#f3e7db", borderRadius: 4, paddingHorizontal: 4, paddingVertical: 2,alignItems:"center",width:50,height:20 }}>
                                <Text style={styles.text1}>Abv 4.2</Text>
                            </View>
                        </View>
                        <Text style={styles.dollar}>$6.00</Text>
                    </View>
                    <Image style={{width:30,height:30,resizeMode:"contain",alignSelf:"center"}} source={require('../../assets/images/scan.png')} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fcf2e8",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 2,
        shadowColor:"#fff"
    },
    row: {
        flexDirection: "row",
        justifyContent:"space-between"
    },
    text1: {
        color: "#7f705d",
        fontSize: 10,
        fontFamily:"Oswald-Regular"
    },
    text0: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 14
    },
    dollar: {
        color: '#e74a07',
        paddingTop:10,
        fontSize:18,
        fontFamily:"Oswald-Medium"
    },
    textD:{
        color:"#000000",
        fontFamily:"Oswald-Medium",
        fontSize:16
    }
})