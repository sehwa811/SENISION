import {useState} from "react";
import {Text, TextInput, View} from "react-native";


export default function NameInput() {
  const [text, onChangeText] = useState("이름을 입력하세요");
  
  return (
    <View>
      <TextInput onChangeText={onChangeText} value={text}></TextInput>
      
    </View>
  );
}
