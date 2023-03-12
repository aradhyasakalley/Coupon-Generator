import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
const UserDataDy = () => {
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [code, setCode] = useState('');

  const navigation =useNavigation();

  // const navigation = useNavigation();
  // const generateCode = () => {
  //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;"\'<>,.?/';
  //   let randomCode = '';
  //   for (let i = 0; i < 15; i++) {
  //     randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   setCode(randomCode);
  // }


  const handleLogin = () => {
    if (!category) {
      Alert.alert('Error', 'Please enter the category of product');
      return;
    }
    if (!brand) {
      Alert.alert('Error', 'Please enter the brand of the product');
      return;
    }
    if (!price) {
        Alert.alert('Error', 'Please enter the price');
        return;
      }
      if (!discount) {
        Alert.alert('Error', 'Please enter the discount');
        return;
      }
    //   if (!quantity) {
    //     Alert.alert('Error', 'Please enter the quantity');
    //     return;
    //   }
    else{
      navigation.navigate("coupon");
    }
    // TODO: Handle login logic here
  };

  return (
    <ScrollView>
        <Text style={styles.head}>DYNAMIC COUPON GENERATOR</Text>
    <View style={styles.container}>
      <LottieView
        source={require('./95559-send-mail.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Category of product"
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          style={styles.input}
          placeholder="Brand"
          value={brand}
          onChangeText={setBrand}
        />
        <TextInput
          style={styles.input}
          placeholder="Price Under"
          value={price}
          keyboardType="numeric"
          onChangeText={setPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Discount %"
          value={discount}
          keyboardType="numeric"
          onChangeText={setDiscount}
        />
        {/* <TextInput
          style={styles.input}
          placeholder="Quantity of coupons to generate"
          value={quantity}
          keyboardType="numeric"
          onChangeText={setQuantity}
        /> */}
        
        {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Generate Coupon Code</Text>
        </TouchableOpacity> */}
        {/* <Text style={styles.para} onPress={onSignUpPressed}>New here? Sign Up</Text> */}
        <Button title="Generate Coupon" onPress={handleLogin} />
      {/* <TextInput
      style={styles.gen}
      value={code}
      /> */}
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:'bold'
  },
  animation: {
    width: 300,
    height: 300,
  },
  para:{
    fontSize:15,
    color:'red',
    paddingTop: 15,
    textAlign: 'center'
  },
  form: {
    marginTop: 30,
    width: '80%',
  },
  gen:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    textAlign:'center'

  },
  head:{
    fontSize:24,
    color:"#2F58CD",
    fontWeight:'bold',
    textAlign:'center'
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default UserDataDy;