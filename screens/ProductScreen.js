import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductScreen = ({navigation}) => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://api.codingthailand.com/api/course')
      console.log(res.data.data)
      // alert(JSON.stringify(res.data.data)) (For Test Backend)
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); // set error to state of error about what happen? between axios or server
    }

  }

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  )

  // useEffect(() => {
  //     getData();
  // },[])

  if (error) { //if error happen will return UI from here
    return (
      <View style={styles.container}>
        <Text>
          {error.message}
        </Text>
        <Text>
          Fail Can't Connect to a Server
        </Text>
      </View>
    )
  }

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="aquamarine" size="large" />
      </View>
    )
  }

  const _onRefresh = () => {
    getData();
  }

  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity 
        style={styles.addButtonStyle}
        onPress = {()=>{
          navigation.navigate('Detail',{
            id:item.id,
            title:item.title
          })
        }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', margin: '5' }}>
              <Image
                resizeMode='cover'
                source={{ uri: item.picture }}
                style={styles.thumbnail}
              />
              <View style={styles.container}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.detail}>{item.detail}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={_renderItem}
        refreshing={loading}
      // ItemSeparatorComponent = {ItemSeparatorView} (Don't Have)
      // onRefresh = {_onRefresh}    
      />
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: '#444',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    color: '#888',
    fontWeight: '700',
  },
  addButtonStyle: {
    width: '100%',
    marginBottom: 15
  }
});