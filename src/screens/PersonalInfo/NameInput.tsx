import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import {useUserContext} from "../../context/UserContext";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackScreenList} from "../InitContainer";

export default function NameInput() {
  const [name, onChangeName] = useState("placeholder");
  const navigation =
    useNavigation<NativeStackNavigationProp<StackScreenList, "NameInput">>();
  const {setUserInfo} = useUserContext();

  const handleNext = () => {
    setUserInfo(prev => ({...prev, name}));
    navigation.navigate("GenderInput", {name});
  };

  return (
    <View>
      <Text>당신의 이름을 알려주세요</Text>
      <TextInput onChangeText={onChangeName} value={name}></TextInput>
      <Button title="다음" onPress={handleNext} />
    </View>
  );
}
