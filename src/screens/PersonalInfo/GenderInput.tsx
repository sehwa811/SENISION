import {Button, Text, View} from "react-native";

export default function GenderInput({navigation}: any) {
  return (
    <View>
      <Text>당신의 성별을 알려주세요</Text>
      <Button title="남성" />
      <Button title="여성" />
      <Button title="다음" onPress={() => navigation.navigate("AgeInput")} />
    </View>
  );
}
