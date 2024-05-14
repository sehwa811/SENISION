import { useState } from "react";
import { Text, View } from "react-native";
import DatePicker from "react-native-date-picker";


export default function HomeScreen() {
    const [date, setDate] = useState(new Date());
    return (
        <View>
            <Text>Home</Text>


   <DatePicker date={date} onDateChange={setDate} />
        </View>
    )
}