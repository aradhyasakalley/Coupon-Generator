import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
  Animated,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Coupon = ({item}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const onUsePressed = () => {
    navigation.navigate('os')
  }

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(flipAnim, {
      toValue: isFlipped ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  const frontAnimatedStyle = {transform: [{rotateY: frontInterpolate}]};
  const backAnimatedStyle = {transform: [{rotateY: backInterpolate}]};
  return (
    
    <TouchableOpacity  style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title.substring(0,20)}..</Text>
        <Text style={styles.validity}>{item.category}</Text>
      </View>
      <Text style={styles.description}>{item.description.substring(0,100)}</Text>
      <TouchableOpacity onPress={onUsePressed} style={styles.useButton}>
        <Text style={styles.useButtonText}>Use Coupon</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
    //   padding:25,
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      main:{
       padding:10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 20,
      margin:20
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    validity: {
      fontSize: 12,
      color: '#666666',
    },
    description: {
      fontSize: 14,
      marginBottom: 10,
    },
    useButton: {
      backgroundColor: '#ff9900',
      padding: 10,
      borderRadius: 5,
      alignSelf: 'flex-end',
      marginRight:3,
      
    },
    useButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 14,
    },
  });

export default Coupon;
