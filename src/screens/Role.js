import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Role = () => {
  const navigation =useNavigation();
  const onUserPressed = () => {
    navigation.navigate('ulogin');
  }
  const onAdminPressed = () => {
    navigation.navigate('usignup');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select Role</Text>
      <TouchableOpacity onPress={onUserPressed} style={styles.button}>
        <Text style={styles.buttonText}>User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAdminPressed} style={styles.button}>
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Role;

