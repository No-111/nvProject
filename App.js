import { View, Text , Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

function Homescreen({navigation}) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <Button
       title="Go To Setting"
       onPress={()=> navigation.navigate('Settings')}
      />
    </View>
  )
}

function Settingscreen({navigation}) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Settings</Text>
      <Button
       title="Go To Home"
       onPress={()=> navigation.navigate('Home')}
      />
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homescreen}/>
      <Tab.Screen name="Settings" component={Settingscreen}/>

    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App