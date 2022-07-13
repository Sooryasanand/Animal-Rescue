import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Auth/LoginScreen";
import SignupScreen from "./screens/Auth/SignupScreen";
import UpdateScreen from "./screens/Auth/UpdateScreen";
import { MyTabs } from "./screens/Navigator/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign Up"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeStack"
          component={MyTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Update"
          component={UpdateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
