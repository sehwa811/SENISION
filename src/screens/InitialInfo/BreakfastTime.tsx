import { useState } from "react";
import DatePicker from "react-native-date-picker";

export default function BreakfastTime() {
    const [date, setDate] = useState(new Date());

    return <DatePicker date={date} onDateChange={setDate} />
}