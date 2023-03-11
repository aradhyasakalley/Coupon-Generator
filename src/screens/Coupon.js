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

const Coupon = ({item}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

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
    <View style={styles.container}>
      <TouchableOpacity onPress={flipCard}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <Image style={styles.images} source={{uri: item.image}} />
          <View>
            <Text style={styles.title}>{item.type}</Text>
            <Text style={styles.description}>{item.category}</Text>
          </View>
        </Animated.View>

        <Animated.View
          style={[styles.card, styles.backCard, backAnimatedStyle]}>
          <Text style={styles.couponCode}>{item.category}</Text>
          <Text style={styles.couponCode2}>{item.price}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor:'yellow'
    backgroundColor: '#FFFDD0',

    // justifyContent: 'center',
  },
  card: {
    width: 372,
    marginTop: 20,
    height: 200,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    justifyContent: 'space-between',
    backfaceVisibility: 'hidden',
    // borderColor:'black',
    // borderWidth:10,
    backgroundColor: '#fffceb',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#e9e0d4',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backCard: {
    position: 'absolute',
    top: 0,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  images: {
    width: 150,
    height: 160,
    borderRadius: 10,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  couponTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 8,
    // marginRight: 20,
  },
  couponTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginRight: 10,
    marginTop: 20,
  },
  couponCode: {
    fontSize: 30,
    color: '#777',
    justifyContent: 'center',
    marginLeft: 10,
  },
  couponCode2: {
    fontSize: 18,
    color: '#777',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Coupon;
