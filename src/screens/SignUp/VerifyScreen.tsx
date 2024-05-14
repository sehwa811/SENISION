import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

export default function VerifyPhoneNumber() {
  const [phoneNumber, onChangeNumber] = useState<string>();

  return (
    <View>
      <View>
        <Text>전화번호 인증</Text>
        <Text>서비스 이용을 위해 번호 인증을 해주세요</Text>
      </View>
      <View>
        <Text>휴대전화 번호</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={onChangeNumber}></TextInput>
        <Button
          title="인증번호 받기"
          onPress={() => console.log("인증번호 전송")}></Button>
      </View>
      <View>
        <Text>로그인에 어려움이 있나요?</Text>
      </View>
    </View>
  );
}