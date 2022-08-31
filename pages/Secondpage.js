import { View, Text, Button} from "react-native";
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
