import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

export default function LoginScreen({navigation}: any) {
  const [phoneNumber, onChangeNumber] = useState<string>();
  return (
    <View>
      <View>
        <Text>디딤</Text>
      </View>
      <View>
        <TextInput onChangeText={onChangeNumber} value={phoneNumber} />
        <Button
          title="전화번호로 로그인"
          onPress={() => navigation.navigate("Name")}></Button>
      </View>
      <View>
        <Text>SNS 계정으로 로그인</Text>
      </View>
      <View>
        <Text>로그인에 어려움이 있나요?</Text>
      </View>
    </View>
  );
}
