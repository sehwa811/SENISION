import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

export default function NameInput({navigation}: any) {
  const [text, onChangeText] = useState("placeholder");

  return (
    <View>
      <Text>당신의 이름을 알려주세요</Text>
      <TextInput onChangeText={onChangeText} value={text}></TextInput>
      <Button title="다음" onPress={() => navigation.navigate("GenderInput")} />
    </View>
  );
}
