import React, {Children, useContext, useState} from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  useDrawerProgress,
  useDrawerStatus,
} from '@react-navigation/drawer';

import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  // Animated
} from 'react-native';
// import {Switch} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Animated from 'react-native-reanimated';
import Home from '../../screens/Home/Home.screen';
import MyPoint from '../../screens/MyPoint/MyPoint';
import MyPurchase from '../../screens/MyPurchase/MyPurchase';
import AppFeedback from '../../screens/AppFeedback/AppFeedback';
import ToggleSwich from '../../components/ToggleSwich/ToggleSwich';
import AntDesign from 'react-native-vector-icons/AntDesign'
const DrawerContent = props => {
  const draweritem = [
    {
      // image: '',
      title: 'Home',
      navigateTo: 'Home',
    },

  ];
  const [untilToday, setUntilToday] = useState(false)
  const [quality , setQuality] = useState(false)
  const [smart, setSmart] = useState(false);
  const {navigation}=props
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1, }}>
          <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
       
        <View style={styles.top}>
        <Image style={styles.profile} source={require('../../assets/images/profilePicture.png')} />
          <View style={{flexDirection:"row"}}>
          <Text style={styles.profileName}>Edward Davidson</Text>
          <Image style={styles.editProfile} source={require('../../assets/images/editProfile.png')} />
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={styles.textNum}>+1-202-555-0184</Text>
            <Text style={styles.textNum}>adwardd@gmail.com</Text>
          </View>
        </View>
        <View style={{paddingLeft:15,paddingTop:"18%"}}>
          <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.row1}
          >
             <Image style={styles.menuHome} source={require('../../assets/images/menuHome.png')} />
          <Text style={styles.text1}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={0.8}
          style={styles.row1}
          onPress={() => navigation.navigate('MyPurchase')}
          >
             <Image style={styles.menuHome} source={require('../../assets/images/menuPurchases.png')} />
          <Text style={styles.text1}>My Purchases</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyPoint')}
            activeOpacity={0.8}
          style={styles.row1}
          >
             <Image style={styles.menuHome} source={require('../../assets/images/menuMy-Points.png')} />
          <Text style={styles.text1}>My Point</Text>
          </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.row1}
        onPress={() => setQuality(!quality)}
        >
           <Image style={styles.menuHome} source={require('../../assets/images/menuSettings.png')} />
          <Text style={styles.text1}>Settings</Text>
        </TouchableOpacity>
        {
          quality &&(
            <View>
              <View style={{flexDirection:"row",paddingLeft:"12%",justifyContent:"space-between",alignItems:"center",paddingVertical:10}}>
                <Text style={styles.text3}>Change Password</Text>
                <AntDesign  name='right' size={16} color={'#eb4909'} />
              </View>
              <View style={{flexDirection:"row",paddingLeft:"12%",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={styles.text3}>Notification</Text>
                <ToggleSwich
                   selectionMode={1}
                   onSelectSwitch={e => {
                     setUntilToday(e)
                   }}
                />
              </View>
            </View>
          )
        }
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AppFeedback')}
          style={styles.row1}
          >
             <Image style={styles.menuHome} source={require('../../assets/images/menuApp-Feedback.png')} />
          <Text style={styles.text1}>App Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.row1}
          >
            <Image style={styles.menuHome} source={require('../../assets/images/menuAbout-App.png')} />
          <Text style={styles.text1}>About App</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.logout}
        >
           <Image style={styles.menuHome} source={require('../../assets/images/menuLogout.png')} />
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({navigation, style}) => {
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <Animated.View
      style={StyleSheet.flatten([styles.stack, animatedStyle])}
    >
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}
        headerMode="none">
 

        <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
        <Stack.Screen name="MyPoint">{props => <MyPoint {...props} />}</Stack.Screen>
        <Stack.Screen name="MyPurchase">{props => <MyPurchase {...props} />}</Stack.Screen>
        <Stack.Screen name="AppFeedback">{props => <AppFeedback {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};



export default props => {
  // const [progress, setProgress] = React.useState(new Animated.Value(0));

  return (
      <Drawer.Navigator
        screenOptions={{
          drawerType: "slide",
          drawerStyle: {
            flex: 1,
            width: '65%',
            backgroundColor: '#20382b',
          },
          overlayColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: '#20382b',
          },
        }}
        drawerContent={props => {
          // setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens" options={{headerShown: false}}>
          {props => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    width: '100%',
    shadowColor: 'black',

    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,

    // backgroundColor: 'white',
    overflow: 'hidden',
    // borderWidth: 1,
  },
  drawerStyles: {flex: 1, width: '60%', backgroundColor: 'transparent'},
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},
  drawerLabel: {color: 'white', marginLeft: 0},
  avatar: {
    width: width * 0.4,
    height: height * 0.1,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 10,
  },
  top:{
    paddingTop:"6%",
    paddingLeft:15
  },
  textNum:{
    fontSize:12,
    color:"#949a96",
    // paddingHorizontal:2,
    paddingTop:8
  },
  row1:{
    paddingVertical:14,
    flexDirection:"row"
  },
  text1:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:16,
    paddingLeft:8
  },
  logout:{
    paddingTop:"12%",
    paddingLeft:15,
    flexDirection:"row"
  },
  textLogout:{
    color:"#ffffff",
    fontWeight:"bold",
    fontSize:16,
    paddingLeft:8
  },
  profile:{
    width:55,
    height:55
  },
  editProfile:{
    width:20,
    height:20,
    marginTop:4
  },
  profileName:{
    color:"#ffffff",
    fontWeight:"bold",
    fontSize:18,
    paddingRight:8
  },
  menuHome:{
    width:20,
    height:20
  },
  text3:{
    color:"#b1aea5",
    fontWeight:"bold",
    fontSize:12
  }
});
