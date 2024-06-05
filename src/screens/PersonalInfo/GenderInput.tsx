import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Button, Text, View} from "react-native";
import {StackScreenList} from "../InitContainer";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {useState} from "react";
import {useUserContext} from "../../context/UserContext";
import { inputStyles } from "./NameInput";

export default function GenderInput() {
  const [gender, setGender] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<StackScreenList, "GenderInput">>();
  const {setUserInfo} = useUserContext();

  const handleNext = () => {
    setUserInfo(prev => ({...prev, gender}));
    navigation.navigate("AgeInput");
  };

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.title}>당신의 성별을 알려주세요</Text>
      <Button title="남성" />
      <Button title="여성" />
      <Button title="다음" onPress={handleNext} />
    </View>
  );
}
