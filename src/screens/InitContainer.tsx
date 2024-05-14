import {LogBox, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUp/SignUpScreen';
import HomeScreen from './HomeScreen';
import NameInput from './PersonalInfo/NameInput';
import GenderInput from './PersonalInfo/GenderInput';
import VerifyPhoneNumber from './SignUp/VerifyScreen';

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
            <Stack.Screen name="Verify" component={VerifyPhoneNumber}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="Name" component={NameInput}></Stack.Screen>
            <Stack.Screen name="Gender" component={GenderInput}></Stack.Screen>
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}