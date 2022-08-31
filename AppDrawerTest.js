import { StyleSheet, Text, View , Button , TextInput } from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer';


function Homescreen({navigation}) {
  return(
    <View style={{flex:1,alingItems:'center',justifyContent:'center'}}>
      <Button onPress={()=> navigation.navigate('Notification')}
      title = 'Go To Notification'
      />
    </View>
  )
}

function Notifications({navigation}) {
  return(
    <View style={{flex:1,alingItems:'center',justifyContent:'center'}}>
      <Button onPress={()=> navigation.goBack()}
      title = 'Go Back Home'
      />
    </View>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name='Home' component={Homescreen}/>
        <Drawer.Screen name='Notification' component={Notifications}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App