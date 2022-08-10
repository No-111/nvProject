import { View, Text , Button } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'

const Homescreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Ionicons name='home' size={30} color='aquamarine'/>
      <Text>Home Screen</Text>
      <Button 
      title='เกี่ยวกับเรา'
      onPress={()=>navigation.navigate('About',{email:'reactnative.tni.ac.th'})}
      />
    </View>
  )
}

export default Homescreen