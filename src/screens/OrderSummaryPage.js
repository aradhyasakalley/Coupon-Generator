import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const OrderSummaryPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePayButtonPress = () => {
    setIsAnimating(true);

    // TODO: Implement payment logic

    setTimeout(() => {
      setIsAnimating(false);
    }, 10000);
  };

  return (
    <View style={styles.container}>
        {isAnimating ? (
          <LottieView
            style={styles.payButtonAnimation}
            source={require('../../42675-payment-successful.json')}
            autoPlay
            loop={false}
            speed={1.5}
          />
        ) : (
          <Text style={styles.payButtonText}>Pay</Text>
        )}
      <Text style={styles.title}>Order Summary</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.label}>Original Price:</Text>
        <Text style={styles.price}>$100.00</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.label}>Coupon Price:</Text>
        <Text style={styles.price}>-$20.00</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.label}>Discounted Price:</Text>
        <Text style={styles.discountedPrice}>$80.00</Text>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePayButtonPress}>
       
          <Text style={styles.payButtonText}>Pay</Text>
       
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    color: '#8e8e8e',
  },
  discountedPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#ff2d55',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  payButtonAnimation: {
    marginRight:3,    
    width: 400,
    height: 400,
  },
});

export default OrderSummaryPage;




