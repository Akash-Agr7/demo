import { SafeAreaView, View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert, Pressable } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#00000033'
                : '#00000000'
            },
            styles.imageStyle1
          ]}>
            <Image
              style={{ height: 35, width: 35, alignSelf:'center' }}
              source={require('./src/assets/images/back.png')}
            />
          </Pressable>

          <Text style={styles.heading}>{'Select Payment'}</Text>
        </View>
        <View style={styles.body}>
          <ScrollView bounces={false} style={styles.scroll}>

            <View style={styles.statement}>
              <Text style={styles.head}>{'Total'}</Text>
              <Text style={styles.amount}>{'$209.05'}</Text>
            </View>

            <View style={{marginTop: 20,}}></View>
            <View style={styles.button_container}>

              <TouchableOpacity style={styles.button} onPress={() => { Alert.alert('hello') }}>
                  <Image
                    style={styles.imagelogo}
                    source={require('./src/assets/images/card.png')}
                  />
                  <Text style={styles.buttontext}>{'Credit Card'}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => { Alert.alert('hello') }}>
                <Image
                    resizeMode='contain' style={styles.imagelogo}
                    source={require('./src/assets/images/UPI.webp')}
                  />
                  <Text style={styles.buttontext}>{'UPI Transaction'}</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.button_container}>

              <TouchableOpacity style={styles.button} onPress={() => { Alert.alert('hello') }}>
                <Image
                    style={styles.imagelogo}
                    source={require('./src/assets/images/gift_card.png')}
                  />
                  <Text style={styles.buttontext}>{'Gift Card'}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} disabled onPress={() => { Alert.alert('hello') }}>
                <Image
                    style={styles.imagelogo}
                    source={require('./src/assets/images/cash.jpeg')}
                  />
                  <Text style={styles.buttontext}>{'Cash'}</Text>
              </TouchableOpacity>

            </View>

          </ScrollView>
        </View>

      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#0de',
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 0.07,
    flexDirection: 'row',
    backgroundColor: '#0de',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imageStyle1: {
    height: 35,
    width: 35,
    position: 'absolute',
    left: 10,
    borderRadius: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
  },
  body: {
    flex: 0.8,
    padding: 10,
  },
  scroll: {
    flex: 0.5,
  },
  statement: {
    alignItems:'center',
    marginVertical: 20,
  },
  head: {
    fontSize: 20,
    fontWeight: '500',
  },
  amount: {
    fontSize: 40,
    fontWeight: '500',
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    margin: 15,
    padding: 10,
    width: 150,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  imagelogo: {
    height: 70,
    width: 70,
    marginBottom: 10,
    alignSelf:'center',
  },
  buttontext: {
    marginBottom: 10,
    fontSize: 17,
    textAlign: 'center',
  },
})