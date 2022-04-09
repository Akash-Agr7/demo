import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import HomeScreen from './HomeScreen';
import Register from './Register';
import {TabBarItem} from 'react-native-tab-view';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home Screen"
        activeColor="#000000"
        // barStyle= {{
        //   backgroundColor: '#35858B',
        // }}
        // screenOptions={{ }}
      >
        <Tab.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{tabBarLabel:'Home',
            tabBarIcon: ({focused}) => (
              <Image
                style={{height: 25, width: 25}}
                source={
                  focused
                    ? require('../assets/images/home.png')
                    : require('../assets/images/house.png')
                }
              />
            ),
            tabBarColor: '#35858B',
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{height: 25, width: 25}}
                source={
                  focused
                    ? require('../assets/images/search.png')
                    : require('../assets/images/search_not.png')
                }
              />
            ),
            tabBarColor: '#3fa6a3',
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{height: 25, width: 25}}
                source={
                  focused
                    ? require('../assets/images/notification.png')
                    : require('../assets/images/bell.png')
                }
              />
            ),
            tabBarColor: '#4FBDBA',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={MyStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{height: 25, width: 25}}
                source={
                  focused
                    ? require('../assets/images/user.png')
                    : require('../assets/images/user_select.png')
                }
              />
            ),
            tabBarColor: '#00b3b3',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Register}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{height: 25, width: 25}}
                source={
                  focused
                    ? require('../assets/images/settings.png')
                    : require('../assets/images/settings_not.png')
                }
              />
            ),
            tabBarColor: '#009999',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: '#53B8BB',},
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}
function Search() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search</Text>
    </View>
  );
}
