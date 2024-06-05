import {useState} from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {apiInstance} from "../../api/instance";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackScreenList} from "../InitContainer";
import {useNavigation} from "@react-navigation/native";
import {GlobalStyles} from "../../styles/GlobalStyle";

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
    <View style={GlobalStyles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>전화번호 인증</Text>
        <Text style={styles.titleText}>
          서비스 이용을 위해 번호 인증을 해주세요
        </Text>
      </View>
      <View style={styles.phoneNumberBox}>
        <Text>휴대전화 번호</Text>
        <TextInput
          value={phoneNumber}
          keyboardType="numeric"
          style={styles.inputBox}
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
            <TouchableOpacity onPress={VerifyCode} style={styles.buttonBox}>
              <Text>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBox}>
              <Text>취소</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={verifyNumber} style={styles.buttonBox}>
            <Text style={styles.buttonText}>인증번호 받기</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    paddingVertical: 60,
  },
  title: {
    fontSize: 20,
  },
  titleText: {
    color: "#767676",
  },
  phoneNumberBox: {
    width: "100%",
  },
  inputBox: {
    borderBottomColor: "#262D37",
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 15,
  },
  verifyContainer: {
    display: "none",
  },
  buttonBox: {
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "none",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 70,
    width: "auto",
    height: "auto",
    backgroundColor: "#D9D9D9",
  },
  buttonText: {
    fontSize: 17,
    color: "white",
  },
});
