import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Role from './Role';
import OnboardingScreen from './OnboardingScreen';
import SplashScreen from './SplashScreen'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import AdminLogin from './AdminLogin'
import AdminSignup from './AdminSignup'
import SearchPage from './SearchPage'
import CardList from './CardList'
import OrderSummaryPage from './OrderSummaryPage'
import Transition from './Transition'
import UserData from './UserData'
import UserDataDy from './UserDataDy'
import Coupon from './Coupon';

const StackNavigator = () => {

    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{headerShown:false}}>
        <Stack.Screen name="onb" component={OnboardingScreen} />
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="role" component={Role}/>
        <Stack.Screen name="ulogin" component={LoginScreen}/>
        <Stack.Screen name="usignup" component={SignUpScreen}/>
        <Stack.Screen name="alogin" component={AdminLogin}/>
        <Stack.Screen name="asignup" component={AdminSignup} />
        <Stack.Screen name="Home" component={SearchPage} />
        <Stack.Screen name="list" component={CardList} />
        <Stack.Screen name="os" component={OrderSummaryPage} />
        <Stack.Screen name="transit" component={Transition} />
        <Stack.Screen name="static" component={UserData} />
        <Stack.Screen name="dynamic" component={UserDataDy} />
        <Stack.Screen name="coupon" component={Coupon}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})