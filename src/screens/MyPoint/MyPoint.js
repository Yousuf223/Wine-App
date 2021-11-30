import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { Input } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign'
import PointCard from '../../components/PointCard/PointCard';
const MyPoint = ({ navigation, user }) => {
    const dispatch = useDispatch()
    const cardData = [
        {
            image: require('../../assets/images/myPoints.png')
        },
        {
            title: "Franziskaner Hefeweizen",
            number: '02',
            point:'230',
            image: require('../../assets/images/myPoints.png')
        },
        {
            title: "8th wonder heaterade gose",
            number: '03',
            point:'450',
            image: require('../../assets/images/myPoints.png')
        },
        {
            title: "Dogfish head punkin ale",
            number: '04',
            point:'320',
            image: require('../../assets/images/myPoints.png')
        },
        {
            title: "Petrus Cherry Chocolate",
            number: '05',
            point:'414',
            image: require('../../assets/images/myPoints.png')
        },
        {
            title: "Bwd border town",
            number: '06',
            point:'654',
            image: require('../../assets/images/myPoints.png')
        },
        {
            title: "Lagunitas IPA",
            number: '06',
            point:'476',
            image: require('../../assets/images/myPoints.png')
        },
    ]
    return (
        <>
        <View style={styles.container}>
            {/* <StatusBar barStyle="dark-content" backgroundColor={'#20382b'} /> */}
            <View style={styles.header}>
            <AntDesign onPress={() => navigation.goBack()} name='arrowleft' size={23} color={'#ffffff'} />
            <Text style={styles.text1}>My Point</Text>
            </View>
            <View style={styles.row}>
            <Image style={styles.myPoint} source={require('../../assets/images/myPointsSmall.png')} />
                <Text style={styles.text2}>12,584</Text>
            </View>
            
            <View style={styles.footer}>
            <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{ paddingHorizontal: 20,flex:1,flexGrow:1 }}>
                    { 
                    cardData.map((item) => {
                        return(
                            <View style={{ paddingVertical: 6 }}>
                            <PointCard
                                number={item.number}
                                title={item.title}
                                point={item.point}
                                image={item.image}
                            />
                        </View>
                        )
                    })
                    }
                   
                </View>
                </ScrollView>
            </View>
           
        </View>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#20382b"
    },
    header:{
        flexDirection:"row",
        paddingVertical:"13%",
        paddingHorizontal:10
    },
    text1:{
        color:"#ffffff",
        paddingLeft:15,
        fontWeight:"bold",
        fontSize:16
    },
    row:{
        flexDirection:"row",
        justifyContent:"center",
        paddingBottom:"10%"
    },
    footer:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:"#f8ece0",
        paddingVertical:10
    },
    text2:{
        fontSize:30,
        color:"#ffffff",
        fontWeight:"bold"
    },
    myPoint:{
        width:32,
        height:32,
        marginTop:8
    }
})
export default connect(mapStateToProps, null)(MyPoint)