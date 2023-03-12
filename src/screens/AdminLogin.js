import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import LottieView from 'lottie-react-native';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const onSignUpPressed = () => {
    navigation.navigate("SignUpPage");
  }

  const handleLogin = () => {
    if (!username) {
      Alert.alert('Error', 'Please enter your username');
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }
   
    // TODO: Handle login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please Login To Continue</Text>
      <LottieView
        source={require('../../78126-secure-login.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
      </View>
    </View>
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
    width: 400,
    height: 400,
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


export default AdminLogin;