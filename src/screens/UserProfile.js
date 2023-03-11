import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CouponCard from '../components/CouponCard';

const UserProfile = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.mainHeader}>User Profile</Text>
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
       
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  mainHeader: {
    fontWeight: 'bold',
    textShadowColor: '#2e6b2f',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 5,
    fontSize: 30,
    color: '#3d8f3e',
    textAlign: 'center',
    paddingTop: 20,
  },
});
