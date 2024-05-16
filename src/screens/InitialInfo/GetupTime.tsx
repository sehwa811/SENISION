import {useState} from "react";
import { Button, Text, View } from "react-native";
import DatePicker from "react-native-date-picker";

export default function GetupTime({navigation}:any) {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <Text>기상 시간을 알려주세요</Text>
      <DatePicker date={date} onDateChange={setDate} mode="time" />
      <Button title="다음" onPress={() => navigation.navigate("BreakfastTime")} />
    </View>
  );
}
