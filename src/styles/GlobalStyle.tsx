import {StyleSheet} from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  logoBox: {
    paddingVertical: 80,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginBottom: 50,
  },
  logo: {
    color: "#FF6814",
    fontSize: 40,
    textAlign: "center",
  },
  logoText: {
    color: "#767676",
    textAlign: "center",
  },
  basicButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
    borderColor: "none",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 70,
    width: "auto",
    height: "auto",
  },
  buttonText: {
    fontSize: 17,
    color: "#262D37",
  },
});
