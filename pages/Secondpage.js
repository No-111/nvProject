import { View, Text, Button,StyleSheet } from "react-native";
import {style1} from "../components/style"

export default function SecondPage({navigation}){

    return (
        <View style={style1.container}>
          <Text style={style1.heading}>This is the Second Page</Text>
            <Button title="Go to First Page" 
          onPress={() => navigation.navigate('First Page')}/>
            <Button title="Go to Third Page" 
          onPress={() => navigation.navigate('Third Page')}/>
        </View>
      );


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: "center",
      marginVertical: 10,
    },
    textStyle: {
      textAlign: "center",
      fontSize: 16,
      marginVertical: 10,
    },
  });