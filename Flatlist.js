import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function App() {
  const [count, setCount] = useState(50);
  const [myData, setMyData] = useState([]);
  const [bool, setBool] = useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  useEffect(() => {
    URL = 'https://jsonplaceholder.typicode.com/comments';
    axios.get(URL).then(response => {
      setMyData(response.data.slice(0, count));
    });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={myData}
        renderItem={({item}) => {
          return (
            <View>
                <View style={{backgroundColor: 'red',margin: 10, padding: 10,}}>

              <Text>
                {item.id}. {item.email}
              </Text>
                </View>
            </View>
          );
        }}
        onRefresh= {React.useCallback(() => {
          setBool(!bool);
          wait(200).then(() => setBool(!bool));
        },[])}
        refreshing={bool}

        onEndReached={() => {
          axios.get(URL).then(response => {
            setMyData([...myData, ...response.data.slice(count, count + 50)]);
            setCount(count + 50);
          });
          alert('got it');
        }}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingVertical: 40,
  },
});
