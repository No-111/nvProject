import { View, Text, Button } from 'react-native'

import React from 'react'

import { Ionicons } from '@expo/vector-icons'

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

const Homescreen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="register" iconName="person-add" onPress={() => alert('register')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name='home' size={30} color='aquamarine' />
      <Text>Home Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />

    </View>
  )
}

export default Homescreen