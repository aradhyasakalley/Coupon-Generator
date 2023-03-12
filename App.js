import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Card from './src/screens/Card';

import CardList from './src/screens/CardList';
import Coupon from './src/screens/Coupon';
import FetchDemo from './src/screens/FetchDemo';


import HomeScreen from './src/screens/HomeScreen';

import LoginScreen from './src/screens/LoginScreen';
import OrderSummaryPage from './src/screens/OrderSummaryPage';
import Role from './src/screens/Role';
import SavedCoupons from './src/screens/SavedCoupons';
import SearchPage from './src/screens/SearchPage';
import SignUpScreen from './src/screens/SignUpScreen';
import StackNavigator from './src/screens/StackNavigator';
import UserProfile from './src/screens/UserProfile';
const App = () => {
  return <StackNavigator/>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  aradhya: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 9,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
