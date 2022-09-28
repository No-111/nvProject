import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Homescreen from './screens/Homescreen';
import Aboutscreen from './screens/Aboutscreen';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'aquamarine'},
        headerTintColor:'orange',
        headerTitleStyle:{fintWeight:'bold',fontSize:30}
      }}
      >
        <Stack.Screen name='Home' component={Homescreen}/>
        <Stack.Screen name='About' component={Aboutscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
