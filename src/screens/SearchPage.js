import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { useNavigation } from "@react-navigation/native";


const SearchPage = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const listRef = useRef();
  const [ind, setInd] = useState(0);
  const [oldData, setOldData] = useState([]);
  const navigation = useNavigation();
  const onBuyPressed = () => {
    navigation.navigate('list')
  }
  useEffect(() => {
    // fetch('https://localhost:27017/products')
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setData(response);
        setOldData(response);
      });
  }, []);

  const onSearch = text => {
    if (text == '') {
      setData(oldData);
    } else {
      let tempList = data.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempList);
    }
  };
  // green button

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          height: 70,
          marginTop: 20,

          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '80%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.2,

            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 15,
          }}>
          <Image
            source={require('../../search.png')}
            style={{width: 24, height: 24, marginLeft: 15, opacity: 0.5}}
          />
          <TextInput
            ref={searchRef}
            placeholder="Search forproducts "
            style={{width: '76%', height: 50}}
            value={search}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
          />
          {search == '' ? null : (
            <TouchableOpacity
              style={{marginRight: 15}}
              onPress={() => {
                searchRef.current.clear();
                onSearch('');
                setSearch('');
              }}>
              <Image
                source={require('../../close.png')}
                style={{width: 16, height: 16, opacity: 0.5}}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={{
            marginRight: 15,
          }}
          onPress={() => {
            setVisible(true);
          }}>
          <Image
            source={require('../../filter.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        ref={listRef}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={ind}
        renderItem={({item, index}) => {
          return (
            <View style={styles.main}>
            <TouchableOpacity style={styles.card}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.description}>{item.description.substring(1,40)}</Text>
                
                <TouchableOpacity onPress={onBuyPressed} style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            </View>
          );
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <View
            style={{
              width: '80%',
              height: 200,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                let tempList = data.sort((a, b) =>
                  a.title > b.title ? 1 : -1,
                );
                setData(tempList);
                listRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}> Sort By Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => a.price - b.price));
                listRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>
                Low to High Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => b.price - a.price));
                listRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>
                Hight to Low Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => b.rating.rate - a.rating.rate));
                listRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}> Sort By Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  card: {

    backgroundColor: '#F5EBE0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    
    
  },
  main:{
    padding:20
  },
  image: {
    margin:20,
    width: 150,
    height: 200,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  buyButton: {
    backgroundColor: '#DBA39A',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});


