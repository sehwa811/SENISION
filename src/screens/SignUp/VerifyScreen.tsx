import {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export default function VerifyPhoneNumber() {
  const [phoneNumber, onChangeNumber] = useState<string>();
  const [codeInput, onChangeCodeInput] = useState<string>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const verifyNumber = () => {
    setIsVisible(true);
  };

  return (
    <View>
      <View>
        <Text>전화번호 인증</Text>
        <Text>서비스 이용을 위해 번호 인증을 해주세요</Text>
      </View>
      <View>
        <Text>휴대전화 번호</Text>
        <TextInput value={phoneNumber} onChangeText={onChangeNumber} />

        <View
          style={[
            styles.verifyContainer,
            {display: isVisible ? "flex" : "none"},
          ]}>
          <View>
            <Text>인증 번호</Text>
            <Button title="재전송" />
          </View>
          <TextInput
            value={codeInput}
            maxLength={4}
            onChangeText={onChangeCodeInput}
          />
        </View>
        {isVisible ? (
          <View>
            <Button title="확인" onPress={verifyNumber} />
            <Button title="취소" onPress={verifyNumber} />
          </View>
        ) : (
          <Button title="인증번호 받기" onPress={verifyNumber} />
        )}
      </View>
      <View>
        <Text>로그인에 어려움이 있나요?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  verifyRequest: {},
  verifyContainer: {
    display: "none",
  },
});
