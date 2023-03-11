import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CouponCard = () => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.cardImage} />
      <View style={styles.couponContent}>
        <Text style={styles.couponTitle}>50% OFF</Text>
        <Text style={styles.couponCode}>COUPON CODE: ABC123</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  couponContent: {
    flex: 1,
    padding: 16,
  },
  couponTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  couponCode: {
    fontSize: 16,
    color: '#777',
  },
});

export default CouponCard;

