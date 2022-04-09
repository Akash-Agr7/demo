import { View, Text, Button,StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const navStack = createNativeStackNavigator()

export default function ParentScreen({ navigation }) {
    return (
      // <SafeAreaView style={styles.container}>

      // <View style={styles.container}>
      //   <Text>hello</Text>

      // </View>
      // </SafeAreaView>

      <navStack.Navigator 
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#53B8BB',},
      }}>
        <navStack.Screen name='Home' component={HomeScreen} options={{headerTitle:(props)=>(
          <Image style={{height: 30, resizeMode: 'contain',}} source={require('../assets/images/img.png')}/>
        ),}}/>
        <navStack.Screen name='Settings' component={SettingsScreen} />
      </navStack.Navigator>

    );
  }

  function HomeScreen({route, navigation}) {
    /* 2. Get the param */
    // const {itemId, otherParam} = route.params;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Home..... again"
          onPress={() =>
            navigation.navigate('Home', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button
          title="Go to login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button title="Go to StudentList" onPress={() => navigation.navigate('Settings')} />
        <Button title="Go back" onPress={() => navigation.navigate('Settings')} />
      </View>
    );
  }

  function SettingsScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00fff0',
    },
  })