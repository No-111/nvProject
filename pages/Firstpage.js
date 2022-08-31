import { View, Text, Button} from "react-native";
import {style1} from "../components/style"


export default function FirstPage({navigation}){

    return (
        <View style={style1.container}>
          <Text style={style1.heading}>This is the First Page</Text>
            <Button title="Go to Second Page" 
          onPress={() => navigation.navigate('Second Page')}/>
            <Button title="Go to Third Page" 
          onPress={() => navigation.navigate('Third Page')}/>
        </View>
      );


}

