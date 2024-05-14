import {LogBox, Text, View} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUp/SignUpScreen";
import HomeScreen from "./HomeScreen";
import NameInput from "./PersonalInfo/NameInput";
import GenderInput from "./PersonalInfo/GenderInput";
import VerifyPhoneNumber from "./SignUp/VerifyScreen";
import AgeInput from "./PersonalInfo/AgeInput";
import GetupTime from "./InitialInfo/GetupTime";
import BreakfastTime from "./InitialInfo/BreakfastTime";
import LunchTime from "./InitialInfo/LunchTime";
import DinnerTime from "./InitialInfo/DinnerTime";

export type StackScreenList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  NameInput: undefined | {name: String; age: number};
};

const Stack = createNativeStackNavigator();

export default function InitContainer(): JSX.Element {
  const isLoggedIn = false;
  const isSignedUp = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="NameInput" component={NameInput}></Stack.Screen>
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
            <Stack.Screen
              name="Verify"
              component={VerifyPhoneNumber}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
          </Stack.Group>
        )}
        <Stack.Group>
          <Stack.Screen name="Name" component={NameInput}></Stack.Screen>
          <Stack.Screen name="Gender" component={GenderInput}></Stack.Screen>
          <Stack.Screen name="Age" component={AgeInput}></Stack.Screen>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="GetupTime" component={GetupTime}></Stack.Screen>
          <Stack.Screen name="BreakfastTime" component={BreakfastTime}></Stack.Screen>
          <Stack.Screen name="LunchTime" component={LunchTime}></Stack.Screen>
          <Stack.Screen name="DinnerTime" component={DinnerTime}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
