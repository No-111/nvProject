import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button , TextInput } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
// import FirstPage from './screens/Firstpage';
// import SecondPage from './screens/Secondpage';

import FirstPage from './pages/Firstpage';
import SecondPage from './pages/Secondpage';
import ThirdPage from './pages/Thirdpage';

function Homescreen({navigation,route}){
  React.useEffect(()=>{
    if(route.params?.post){
      //Post updated,do something with 'route.params.post'
      //For ex, sent the post to the server

    }

  },[route.params?.post]);

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button
        title='Create Post'
        onPress={()=>navigation.navigate('post')}
      />
      <Text style={{margin: 10}}>Post : {route.params?.post}</Text>
    </View>
  )

}

function Createpostscreen({navigation,route}){
  const [postText,setPostText] = React.useState('');
  return(
    //use Fragment
    <>
    <TextInput
    multiline
    placeholder = 'Type Here'
    style = {{height:200,padding:10,backgroundColor:'white'}}
    onChangeText = {setPostText}
    value = {postText}
    >

    </TextInput>
    <Button 
      title='Post'
      //sent the text back to home screen
      
      onPress={()=> {
        navigation.navigate('Home',{post: postText})

      }}
    />
    </>
  );

}



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'aquamarine'},
        headerTintColor:'azure',
        headerTitleStyle:{fintWeight:'bold',fontSize:30}
      }}
      >
        <Stack.Screen name='First Page' component={FirstPage}/>
        <Stack.Screen name='Second Page' component={SecondPage}/>
        <Stack.Screen name='Third Page' component={ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
