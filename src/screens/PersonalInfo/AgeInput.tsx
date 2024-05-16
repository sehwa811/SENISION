import {Button, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {useState} from "react";

export default function AgeInput({navigation}: any) {
  const [selectedAge, setSelectedAge] = useState();

  return (
    <View>
      <Text>당신의 나이를 알려주세요</Text>
      <Picker
        selectedValue={selectedAge}
        onValueChange={(itemValue, itemIndex) => setSelectedAge(itemValue)}>
        <Picker.Item label="10" value="10" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
      </Picker>
      <Button title="다음" onPress={() => navigation.navigate("GetupTime")} />
    </View>
  );
}
