import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from "@react-navigation/native";
import Logo from './appLogo.png'
import LottieView from 'lottie-react-native';

const OnboardingScreen = () => {
    const navigation =useNavigation();
    
    
    const handleAnimationFinish = () => {
      navigation.navigate('splash'); // replace 'NextScreen' with the name of your screen
    };
    // const onButtonPressed = () => {
    //     navigation.navigate("First")
    // }
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      <View style={styles.slide}>
        <Image 
        source={Logo} 
        style={[styles.Logo]} 
        resizeMode="contain"/>
        <Text style={styles.title}>Welcome to WOWCHERS</Text>
        <Text style={styles.description}>Wowchers.Designed to create unique, personalized, and trackable coupons for businesses and individuals.</Text>
      </View>
      <View style={styles.slide}>
      <LottieView
      style={styles.lotte}
        source={require('./121571-about.json')}
        autoPlay
        loop
      />
        <Text style={styles.title}>Discover new features</Text>
        <Text style={styles.description}>Coupon generators typically allow businesses to set various parameters for the coupons they generate, such as the amount of the discount, the duration of the promotion, the products or services the coupon can be applied to, and the quantity of coupons available. </Text>
      </View>
      <View style={styles.slide}>
      <LottieView
      style={styles.newnew}
        source={require('./65509-3-2-1-go.json')}
        autoPlay={true}
        loop={false}
        onAnimationFinish={handleAnimationFinish}
      />
        <Text style={styles.title}>Get started</Text>
        
        
        </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  lotte:{
    height:200,
    width:200
},
newnew:{
width: '80%',
height:300,

},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  Logo: {
    width:  '100%',
    maxWidth: 700,
    height: 500,
},
  
});

export default OnboardingScreen;
