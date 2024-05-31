import {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {apiInstance} from "../../api/instance";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackScreenList} from "../InitContainer";
import {useNavigation} from "@react-navigation/native";

export default function VerifyPhoneNumber() {
  const [phoneNumber, onChangeNumber] = useState<string>("");
  const [codeInput, onChangeCodeInput] = useState<string>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<StackScreenList, "Verify">>();

  const verifyNumber = async () => {
    const data = new FormData();
    data.append("phone", phoneNumber);
    try {
      const response = await apiInstance.post("/auth/make", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsVisible(true);
      return response.data;
    } catch (error: any) {
      console.log("Error during verifying number:", error);
      throw new Error("Error" + error);
    }
  };

  const VerifyCode = async () => {
    try {
      const response = await apiInstance.post("/auth/verification", {
        phone: phoneNumber,
        inputCode: codeInput,
      });
      return response.data;
    } catch (error: any) {
      throw new Error("Failed to verify the code" + error.message);
    }
  };

  const handleSubmit = () => {
    //회원가입이 완료되었습니다 팝업 확인버튼에 들어갈 함수
    navigation.navigate("NameInput");
  };

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
          keyboardType="numeric"
          onChangeText={onChangeNumber}
        />
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
            <Button title="확인" onPress={VerifyCode} />
            <Button title="취소" />
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
