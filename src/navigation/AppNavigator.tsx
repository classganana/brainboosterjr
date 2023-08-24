import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // <Stack.Navigator>
    <NavigationContainer>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Auth"
        component={AuthNavigator}
        />
        </NavigationContainer>
    // </Stack.Navigator>
  );
};

export default AppNavigator;