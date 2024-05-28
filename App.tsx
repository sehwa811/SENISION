import React from "react";
import type {PropsWithChildren} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import InitContainer from "./src/screens/InitContainer";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  
  return <InitContainer />;
}

export default App;
