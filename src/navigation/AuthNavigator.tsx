import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SecondScreen } from "../screens/onboarding/SecondScreen";
import { ThirdScreen } from "../screens/onboarding/ThirdScreen";
import { Text } from "react-native";


const Stack = createStackNavigator();

const AuthNavigator = () => {
     return (
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="SecondScreen"
    //       component={SecondScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="ThirdScreen"
    //       component={ThirdScreen}
    //       options={{ headerShown: false }}
    //     />
    //     </Stack.Navigator>
    <Text> vaibhavn </Text>
           );
};

export default AuthNavigator;