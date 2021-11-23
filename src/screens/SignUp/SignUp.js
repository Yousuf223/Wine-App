import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { connect, useDispatch } from 'react-redux'
import { Input } from 'react-native-elements';

const SignUp = ({ navigation, user }) => {
    const dispatch = useDispatch()
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'#f8ece0'} />
            <ScrollView >
                <View style={styles.container} >
                    <View>
                        <Text style={styles.text1}>Sign Up</Text>
                        <Text style={styles.text2}>Quiz ipsum suspendisses ultrices gravida.Risus commodo viverra maecenas accumsam lacus,facilisis</Text>
                        <View>
                            <Input
                                inputContainerStyle={styles.borderdv}
                                //  onFocus={()=>setToggleUser4(1)}
                                //  onBlur={()=>setToggleUser4(0)}
                                style={styles.email}
                                labelStyle={styles.label}
                                label="Full Name"
                                placeholder='Edward Davidson'
                            />
                            <Input
                                inputContainerStyle={styles.borderdv}
                                //  onFocus={()=>setToggleUser4(1)}
                                //  onBlur={()=>setToggleUser4(0)}
                                style={styles.email}
                                labelStyle={styles.label}
                                label="Email Address"
                                placeholder='adwardg@gmail.com'
                            />
                                 <Input
                                inputContainerStyle={styles.borderdv}
                                //  onFocus={()=>setToggleUser4(1)}
                                //  onBlur={()=>setToggleUser4(0)}
                                style={styles.email}
                                labelStyle={styles.label}
                                label="Password"
                                placeholder='************'
                            />
                                 <Input
                                inputContainerStyle={styles.borderdv}
                                //  onFocus={()=>setToggleUser4(1)}
                                //  onBlur={()=>setToggleUser4(0)}
                                style={styles.email}
                                labelStyle={styles.label}
                                label="Confirm Password"
                                placeholder='************'
                            />
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.btn}
                                //   activeOpacity={0.9}
                                onPress={() => {
                                    navigation.navigate('AppStackNavigator', {
                                        screen: 'Home',
                                    })
                                }}>
                                <Text style={{ color: "#fdf0ea", fontWeight: "bold", fontSize: 16 }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.orLoginContainer}>
                            <View style={styles.linedv}></View>
                            <Text style={{ paddingHorizontal: "1.5%", color: "#8895a3", fontSize: 12, fontFamily: 'Raleway-Regular' }}>Or Login with</Text>
                            <View style={styles.linedv}></View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center", }}>
                            <View style={styles.iconBg}>
                                <AntDesign name='facebook-square' size={25} color={'#254ba0'} />
                            </View>
                            <View style={styles.iconBg}>
                                <AntDesign name='google' size={25} />
                            </View>
                            <View style={styles.iconBg}>
                                <AntDesign name='twitter' size={25} color={'#1da1f3'} />
                            </View>
                        </View>
                        <View style={{marginVertical:"14%",alignItems:"center"}}>
                        <Text style={styles.text3}>Not a member?<Text style={{color:"#e64902"}}>Sign Up</Text></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.users
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8ece0",
        paddingHorizontal: 20
    },
    btn: {
        padding: 16,
        backgroundColor: "#e74a07",
        alignItems: "center",
        borderRadius: 20,

    },
    text1: {
        color: "#000000",
        fontSize: 36,
        fontWeight: "900",
        textAlign: "center",
        paddingVertical: "4%",
        marginTop: "6%"
    },
    text2: {
        color: "#aca094",
        fontSize: 12,
        textAlign: "center",
        lineHeight: 18,
        paddingBottom: "12%"
    },
    email: {
        paddingLeft: 35,
        fontSize: 12,
        color: "#000002",
    },
    borderdv: {
        borderBottomColor: "#e1d5c9",
    },
    label: {
        color: "#e84a03",
        paddingLeft: 35,
        fontSize: 12
    },
    iconBg: {
        backgroundColor: "#efe3d7",
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8
    },
    orLoginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical:14
      },
      linedv: {
        width: 25,
        backgroundColor: "#8895a3",
        height: 1,
      },
      text3:{
          color:"#85786f",
          fontWeight:"bold"
      }
})
export default connect(mapStateToProps, null)(SignUp)