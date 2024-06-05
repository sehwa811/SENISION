import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GlobalStyles} from "../../styles/GlobalStyle";

export default function SignUpScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <View style={GlobalStyles.logoBox}>
        <Text
          style={
            GlobalStyles.logoText
          }>{`행복하고 편안한 노후를 위한\n 낙상 사고 관리 솔루션`}</Text>
        <Text style={GlobalStyles.logo}>디딤</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Verify")}
          style={GlobalStyles.basicButton}>
          <Text style={GlobalStyles.buttonText}>전화번호로 시작하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.snsBox}>
        <Text>or</Text>
        <Text>SNS 계정으로 간편 가입하기</Text>
        <View style={{display: "flex", flexDirection: "row", gap: 2}}>
          <Button title="kakao"></Button>
          <Button title="naver"></Button>
          <Button title="apple"></Button>
          <Button title="google"></Button>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <Text>로그인에 어려움이 있나요?</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("NameInput")}>
        <Text>초기정보 입력</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  snsBox: {
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    gap: 10,
    paddingVertical: 20,
    width: "100%"
  },
  bottomBox: {
    position: "absolute",
    bottom: "10%"
  }
});
