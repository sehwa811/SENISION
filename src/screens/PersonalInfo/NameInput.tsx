import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useUserContext} from "../../context/UserContext";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackScreenList} from "../InitContainer";
import {GlobalStyles} from "../../styles/GlobalStyle";

export default function NameInput() {
  const [name, onChangeName] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<StackScreenList, "NameInput">>();
  const {setUserInfo} = useUserContext();

  const handleNext = () => {
    setUserInfo(prev => ({...prev, name}));
    navigation.navigate("GenderInput", {name});
  };

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.title}>당신의 성함을 알려주세요</Text>
      <TextInput
        onChangeText={onChangeName}
        value={name}
        style={inputStyles.inputBox}></TextInput>
      <Button title="다음" onPress={handleNext} />
    </View>
  );
}

export const inputStyles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
  },
  inputBox: {
    width: "60%",
    textAlign: "center",
    borderBottomColor: "#262D37",
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 15,
  },
});
