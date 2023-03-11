import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imgStyle} source={{uri: item.image}} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  description: {
    fontSize: 16,
  },
});

export default Card;
