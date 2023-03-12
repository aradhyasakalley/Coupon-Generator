import { View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

import { useNavigation } from "@react-navigation/native";
const Transition = () => {
    const navigation = useNavigation();
    const [animationValue, setAnimationValue] = useState(new Animated.Value(0));
    const handleButtonPress = () => {
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      };

      const staticpressed = () => {
navigation.navigate("Data")
      }

      const dynamicpressed= () => {
navigation.navigate("Data2")
      }
      
  return (
    <ImageBackground source={require('./multicoupon.jpg')} style={{flex: 1,}}>
    <View style={{ flex: 1 }}>
  <TouchableOpacity onPress={handleButtonPress} style={{ 
    backgroundColor: 'blue', 
    padding: 10, 
    marginBottom:20,
    marginTop:50,
    marginLeft:40,
    marginRight:40,
    alignItems:'center',
    borderRadius:20
    }}>
    <Text style={{ color: 'white' }}>What type of coupon do you want to create?</Text>
  </TouchableOpacity>
  <Animated.View style={{ opacity: animationValue }}>
    <TouchableOpacity onPress={staticpressed} style={{ 
      backgroundColor: 'red', 
      padding: 10,
      marginBottom:20,
      marginTop:50,
      marginLeft:40,
      marginRight:40,
      borderRadius:20
      }}>
      <Text style={{ color: 'white' }}>Static coupon</Text>
    </TouchableOpacity>
  </Animated.View>
  <Animated.View style={{ opacity: animationValue }}>
    <TouchableOpacity onPress={dynamicpressed} style={{ 
      backgroundColor: 'green', 
      padding: 10,
      marginBottom:20,
      marginTop:50,
      marginLeft:40,
      marginRight:40, 
      borderRadius:20
      }}>
      <Text style={{ color: 'white' }}>Dynamic coupon</Text>
    </TouchableOpacity>
  </Animated.View>
</View>
</ImageBackground>
  )
}

export default Transition

const styles = StyleSheet.create({
  // top:{
  //   padding: 10,
  //     marginBottom:20,
  //     marginTop:50,
  //     marginLeft:40,
  //     marginRight:40,
  //     fontWeight:'bold',
  //     fontSize:25
  // },
  image:{
    flex:1
  }
})