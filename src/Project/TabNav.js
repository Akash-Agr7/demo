import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MiscScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Misc!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Text>{'\u2302'}</Text>
              );
            } else if (route.name === 'Settings') {
              return (
                <Text>Settings</Text>
              );
            }
            else if (route.name === 'Misc'){
                return (
                    <Text>Misc</Text>
                  );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarBadge: Math.floor(Math.random() * 10) }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Misc" component={MiscScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
