import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import TabNav from './TabNav';
import StudentList from './StudentList';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#53B8BB',},
        }}>
        <Stack.Screen name="Tab" component={TabNav} options={{headerTitle:()=>(
          <Image style={{height: 30, resizeMode: 'contain',}} source={require('../assets/images/img.png')}/>
        ),}} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="Student List" component={StudentList} options={{
            headerStyle:{backgroundColor: '#000000',},
            headerTintColor: '#51C4D3',
            headerTitleStyle: {fontWeight: '800', fontSize: 20,},
        }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }

function DetailsScreen({route, navigation}) {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details..... again"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('login')}
      />
      <Button title="Go to StudentList" onPress={() => navigation.navigate('Student List')} />
      <Button title="Go back" onPress={() => navigation.pop()} />
    </View>
  );
}

export default MyStack;
