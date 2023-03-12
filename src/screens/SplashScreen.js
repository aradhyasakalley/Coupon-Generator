import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import Splash from './Splash';
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from 'react-native';



const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
const onHomePressed = () =>{
    navigation.navigate("Login");
}

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); //milliseconds
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    
      <ImageBackground source={require('./background.jpg')} style={{flex: 1}}>
        <View>
    <Text style={styles.head}>Welcome To The App!</Text>
    <Button
    style={styles.but}
    title='Go To Login Page'
    color="red"
  onPress={onHomePressed}
    />
    </View>
</ImageBackground>
      
  );
};

const styles=StyleSheet.create({
head:{
  fontWeight:'bold',
  color:"yellow",
  textAlign:'center',
  fontSize:30,
  paddingTop:30,
  paddingBottom:310
},
})

export default SplashScreen;
