import {Button, Text, View} from "react-native";
import { inputStyles } from "../PersonalInfo/NameInput";

export default function BodyCheck() {
  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.title}>BodyCheck</Text>
      <Button title="완료"></Button>
    </View>
  );
}