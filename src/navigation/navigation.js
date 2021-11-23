import React from 'react'
import Home from '../screens/Home/Home.screen'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'


const Stack = createStackNavigator()
const AuthStack = createStackNavigator()
const AppStack = createStackNavigator()


function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}


function AppStackNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  )
}
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="AuthStackNavigator"
          options={{ headerShown: false }}
          component={AuthStackNavigator}
        />
        <Stack.Screen
          name="AppStackNavigator"
          options={{ headerShown: false }}
          component={AppStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
