import {Button, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackScreenList} from "../InitContainer";
import {useUserContext} from "../../context/UserContext";
import {apiInstance} from "../../api/instance";

export default function AgeInput() {
  const [selectedAge, setSelectedAge] = useState();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackScreenList, "AgeInput">>();
  const {userInfo, setUserInfo} = useUserContext();

  const handleSubmit = async () => {
    setUserInfo(prev => ({...prev, selectedAge}));
    try {
      console.log(userInfo)
      const response = await apiInstance.post("", userInfo);

      if (response.status !== 200) {
        throw new Error("Failed to make an account: " + response.statusText);
      }
      navigation.navigate("GetupTime");
      return response.data;
    } catch (error: any) {
      throw new Error("Error during making an account: " + error.message);
    }
  };

  return (
    <View>
      <Text>당신의 나이를 알려주세요</Text>
      <Picker
        selectedValue={selectedAge}
        onValueChange={(itemValue, itemIndex) => setSelectedAge(itemValue)}>
        <Picker.Item label="10" value="10" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="20" value="20" />
      </Picker>
      <Button title="다음" onPress={handleSubmit} />
    </View>
  );
}
