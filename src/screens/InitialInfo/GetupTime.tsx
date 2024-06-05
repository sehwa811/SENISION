import {useState} from "react";
import { Button, Text, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { inputStyles } from "../PersonalInfo/NameInput";

export default function GetupTime({navigation}:any) {
  const [date, setDate] = useState(new Date());

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.title}>기상 시간을 알려주세요</Text>
      <DatePicker date={date} onDateChange={setDate} mode="time" />
      <Button title="다음" onPress={() => navigation.navigate("BreakfastTime")} />
    </View>
  );
}
