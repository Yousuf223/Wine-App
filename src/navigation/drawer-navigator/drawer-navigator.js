import React, {Children, useContext} from 'react';

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
const {width, height} = Dimensions.get('window');
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Animated from 'react-native-reanimated';

import Home from '../../screens/Home/Home.screen';


const DrawerContent = props => {
  const draweritem = [
    {
      // image: '',
      title: 'Home',
      navigateTo: 'Home',
    },

  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1, }}>
          <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
        <View style={styles.top}>
          <Text>Edward Davidson</Text>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.textNum}>+1-202-555-0184</Text>
            <Text style={styles.textNum}>adwardd@gmail.com</Text>
          </View>
        </View>
        <View style={{paddingLeft:15,paddingTop:"20%"}}>
          <TouchableOpacity 
          style={styles.row1}
          >
          <Text style={styles.text1}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.row1}
          >
          <Text style={styles.text1}>My Purchases</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.row1}
          >
          <Text style={styles.text1}>My Point</Text>
          </TouchableOpacity>
        <TouchableOpacity 
        style={styles.row1}
        >
          <Text style={styles.text1}>Settings</Text>
        </TouchableOpacity>
          <TouchableOpacity
          style={styles.row1}
          >
          <Text style={styles.text1}>App Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.row1}
          >
          <Text style={styles.text1}>About App</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
        style={styles.logout}
        >
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
    paddingTop:"15%",
    paddingLeft:15
  },
  textNum:{
    fontSize:12,
    color:"#949a96",
    paddingHorizontal:4,
    paddingTop:8
  },
  row1:{
    paddingVertical:15
  },
  text1:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:18
  },
  logout:{
    paddingTop:"12%",
    paddingLeft:15
  },
  textLogout:{
    color:"#fff"
  }
});
