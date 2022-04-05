import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function App() {
  const [count, setCount] = useState(5);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    URL = `https://api.instantwebtools.net/v1/passenger?page=$(count)&size=30`;
    axios.get(URL).then(response => {
      console.log(response.data.data);
      setMyData(response.data.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <FlatList
        data={myData}
        renderItem={({item, index}) => {
          return (
            <View style={styles.card}>
              <View style={styles.index}>
                <Text style={styles.coulumn1}>{index + 1}.</Text>
              </View>
              <View style={styles.row}>
                <Image
                  source={{uri: item.airline[0].logo}}
                  style={styles.logo}
                />

                <View style={styles.coulumn2}>
                  <Text style={styles.row1}>{'Name: '}{item.name}</Text>
                  <Text style={styles.row2}>{'Airline: '}{item.airline[0].name}</Text>
                  <Text style={styles.row2}>{'Country: '}{item.airline[0].country}</Text>
                </View>
              </View>
            </View>
          );
        }}
        onEndReached={() => {
          //   alert('got it');
        }}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#072227',
  },
  card: {
      height: 90,
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: '#4FBDBA',
    flexDirection: 'row',
  },
  logo: {
      alignSelf: 'center',
    width: 180,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    opacity: 0.4,
  },
  row: {
    backgroundColor: '#4FBDBA',
    borderRadius: 15,
  },
  coulumn1: {
    fontWeight: '600',
    fontSize: 30,
    textAlign: 'center',
  },
  index: {
    width: 80,
    backgroundColor: '#35858B',
    borderBottomStartRadius: 15,
    borderTopStartRadius: 15,
    justifyContent: 'center',
  },
  coulumn2: {
    width: 270,
    paddingLeft: 50,
    // borderWidth: 0.5,
    paddingVertical: 10,
  },
  row1: {
    fontSize: 25,
  },
  row2: {
    color: '#333333',
  },
});
