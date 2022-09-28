import { View, Text , Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HeaderButton,
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu
} from 'react-navigation-header-buttons'

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

function Homescreen({navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="register" iconName="person-add" onPress={() => alert('register')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Ionicons name='home' size={50} style={{color:'green'}}/>
      <Text>Home Screen</Text>
    </View>
  )
}

function Settingscreen({navigation}) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Settings Screen</Text>
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
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon: ({focused,color,size})=>{
        let iconName;
        if(route.name==='Home'){
          iconName = focused
          ?'home'
          :'home-outline'
        } else if(route.name==='Settings'){
          iconName = focused
          ?'settings'
          :'settings-outline'
        }
        //You can return any component that you like here
        return <Ionicons name={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'gray',
    })}
    >
      
      <Tab.Screen name="Home" component={Homescreen}/>
      <Tab.Screen name="Settings" component={Settingscreen}/>

    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return (
  <Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name='Home' component={MyTabs}/>
    <Drawer.Screen name='Settings' component={Settingscreen}/>
  </Drawer.Navigator>
)
}

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}

export default App