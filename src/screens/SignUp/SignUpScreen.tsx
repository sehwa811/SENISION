import {Button, Text, View} from "react-native";

export default function SignUpScreen({navigation}: any) {
  return (
    <View>
      <View>
        <Text>디딤</Text>
      </View>
      <View>
        <Button
          title="전화번호로 시작하기"
          onPress={() => navigation.navigate("Verify")}
        />
      </View>
      <View>
        <Text>SNS 계정으로 간편 가입하기</Text>
      </View>
      <View>
        <Text>로그인에 어려움이 있나요?</Text>
      </View>

      <Button
        title="초기정보 입력"
        onPress={() => navigation.navigate("NameInput")}
      />
    </View>
  );
}