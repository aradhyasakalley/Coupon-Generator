import React ,{useState}from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,Share } from 'react-native';

const CouponCard = ({title,description,image}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this awesome coupon for ${title}: ${description}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <View style={styles.couponContent}>
        <Text style={styles.couponTitle}>50% OFF</Text>
        <Text style={styles.couponCode}>COUPON CODE: ABC123</Text>
        <View style={styles.buttons}>
        <TouchableOpacity onPress={handleFavorite}>
            <Text style={[styles.buttons, isFavorite && styles.favorite]}>
              {isFavorite ? '❤️' : '♡'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Text style={styles.button}>Share</Text>
          </TouchableOpacity>
          </View>
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
  image: {
    width: 120,
    height: 120,
    marginLeft:10,
    borderRadius:10,
    marginTop:10,
    marginBottom:10
  },
  cardImage: {
    width: 200,
    height: 100,
    borderRadius:10,
    marginLeft:20,
    

  },
  buttons: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 5,
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  couponContent: {
    flex: 1,
    padding: 16,
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between'
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



