import {useState} from "react";
import { Button, Text, View } from "react-native";
import DatePicker from "react-native-date-picker";

export default function BreakfastTime({navigation}:any) {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <Text>아침 식사 시간을 알려주세요</Text>
      <DatePicker mode="time" date={date} onDateChange={setDate} />
      <Button title="다음" onPress={() => navigation.navigate("LunchTime")} />
    </View>
  );
}
