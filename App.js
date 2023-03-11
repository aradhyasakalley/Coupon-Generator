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
import CouponCard from './src/components/CouponCard';


import HomeScreen from './src/screens/HomeScreen';

import LoginScreen from './src/screens/LoginScreen';
import SavedCoupons from './src/screens/SavedCoupons';
import SearchPage from './src/screens/SearchPage';
import SignUpScreen from './src/screens/SignUpScreen';
import UserProfile from './src/screens/UserProfile';
const App = () => {
  return <SearchPage />;
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
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
