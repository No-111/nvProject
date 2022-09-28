import { Text, View, Button, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import rtlogo from './assets/react_logo.png';

import Homescreen from './screens/Homescreen';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255,45,85)'
  }
}

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Feed Screen
      </Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
      <Button title='Toggle Drawer' onPress={() => navigation.toggleDrawer()} />

    </View>
  )
}

function ArticleScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Notification Screen
      </Text>
    </View>
  )
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <Image style={styles.sideMenuProfileIcon} source={rtlogo} />
        <DrawerItemList {...props} />
        <DrawerItem label='Close Drawer' onPress={() => props.navigation.closeDrawer()} />
        {/* <DrawerItem label='Toggle Drawer' onPress={()=> props.navigation.toggleDrawer()}/> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );

}

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props}
      />}
      screenOptions={{
        drawerStyle: {
          width: 240
        }
      }}
    >
      <Drawer.Screen name='Home' component={Homescreen} />
      <Drawer.Screen name='Notification' component={ArticleScreen} />
    </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
})