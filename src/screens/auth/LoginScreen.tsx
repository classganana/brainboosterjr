import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { InputComponent } from "../../components/common/InputComponent/InputComponent";
import { Button } from "../../components/common/ButttonComponent/Button";
import { LoginButton } from "../../components/common/ButttonComponent/ButtonStyles";
import React, { useRef, useState } from "react";
import { GoogleIcon } from "../../components/common/SvgComponent/SvgComponent";
import { IconButton } from "../../components/common/IconButtonComponent/IconButton";
// import BottomDrawer, {
//   BottomDrawerMethods,
// } from "react-native-animated-bottom-drawer";
import { useNavigation } from "@react-navigation/native";
// import {defaultIcon} from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";
import { defaultIconButton } from "../../components/common/IconButtonComponent/IconButtonStyle";

export const LoginScreen = () => {
  // const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleEmail(data: any) {
    console.log(data);
    setUserDetails({
      ...userDetails,
      email: data,
    });
  }

  function handlePassword(data: any) {
    setUserDetails({
      ...userDetails,
      password: data,
    });
  }

  function submitLoginForm() {}

  const navigation = useNavigation();
  const BottomTabSetup = () => {
    // console.log(userDetails);
    navigation.navigate("BottomTabSetup" as never);
    console.log("Feedback");
  };

  const moveToForgotPassword = () => {
    navigation.navigate("ForgotPassword" as never);
    console.log("ForgotPassword");
  };

  return (
    <ScrollView>
      <View style={Style.loginContainer}>
        <Text style={Style.loginHeader}>
          Welcome back! Glad to see you, Again!
        </Text>
        <View style={Style.loginForm}>
          <InputComponent
            name={"name"}
            placeholder="Enter your email"
            className={{
              label: undefined,
              inputBox: undefined,
            }}
            onChange={handleEmail}
          />
          <View>
            <InputComponent
              name={"passsword"}
              className={{
                label: undefined,
                inputBox: undefined,
              }}
              secureTextEntry={!passwordVisible}
              onChange={handlePassword}
              placeholder={"Enter your password"}
            />
          </View>
          <TouchableOpacity onPress={moveToForgotPassword}>
            <Text style={{ textAlign: "right" }}>Forget password!</Text>
          </TouchableOpacity>
          <Button
            onPress={() => BottomTabSetup()}
            label={"LOGIN"}
            className={LoginButton}
            disabled={false}
          />
        </View>
        <View style={Style.googleSignInButton}>
          <IconButton
            className={defaultIconButton}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
            icon={<GoogleIcon height={20} width={20} fill={"red"} />}
            label={"Sign-in with google"}
            pos={"left"}
            backgroundColor={"white"}
          ></IconButton>
        </View>
      </View>
      {/* <BottomDrawer ref={bottomDrawerRef} openOnMount>
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomDrawer> */}
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  loginContainer: {
    marginTop: 100,
    display: "flex",
    flex: 1,
    gap: 30,
    height: 500,
    // justifyContent: "center",
    alignItems: "center",
  },
  loginHeader: {
    width: "90%",
    fontSize: 25,
    fontFamily: "Inter-ExtraBold",
  },
  loginForm: {
    display: "flex",
    gap: 15,
    width: "90%",
  },
  googleSignInButton: {
    marginTop: 35,
    display: "flex",
    gap: 15,
    width: "90%",
  },
  eyeIcon: {
    position: "absolute",
    top: 20,
    right: 2,
    zIndex: 1,
  },
});
