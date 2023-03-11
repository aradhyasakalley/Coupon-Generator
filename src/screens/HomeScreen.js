import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CouponCard from '../components/CouponCard'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.mainHeader} >Home Screen</Text>
      <CouponCard/>
    </View>
  )
}

export default HomeScreen

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
})