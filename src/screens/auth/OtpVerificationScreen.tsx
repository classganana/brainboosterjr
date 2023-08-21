import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/common/ButttonComponent/Button';
import { LoginButton } from '../../components/common/ButttonComponent/ButtonStyles';
import { Colors } from '../../styles/colors';

const OtpVerification = () => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);
  const input4Ref = useRef<TextInput>(null);

  const handleTextChange = (text: string, inputRef: React.RefObject<TextInput>) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Filter out non-numeric characters
  
    inputRef.current?.setNativeProps({ text: numericText }); // Set the numeric text as the input's value
  
    if (numericText.length === 0) {
      focusPreviousInput(inputRef);
    } else if (numericText.length >= 1) {
      inputRef.current?.blur();
      focusNextInput(inputRef);
    }
  
    const inputStyle = inputRef.current?.setNativeProps({
      style: { borderColor: numericText.length > 0 ? '#35C2C1' : '#000000' },
    });
  };
  
  const focusNextInput = (currentInputRef: React.RefObject<TextInput>) => {
    if (currentInputRef.current === input1Ref.current) {
      input2Ref.current?.focus();
    } else if (currentInputRef.current === input2Ref.current) {
      input3Ref.current?.focus();
    } else if (currentInputRef.current === input3Ref.current) {
      input4Ref.current?.focus();
    }
  };

  const focusPreviousInput = (currentInputRef: React.RefObject<TextInput>) => {
    if (currentInputRef.current === input2Ref.current) {
      input1Ref.current?.focus();
    } else if (currentInputRef.current === input3Ref.current) {
      input2Ref.current?.focus();
    } else if (currentInputRef.current === input4Ref.current) {
      input3Ref.current?.focus();
    }
  };

  const navigation = useNavigation();

  const moveToResetPassword = () => {
    navigation.navigate("ResetPassword" as never);
    console.log('OtpVerified');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>OTP Verification</Text>
      <Text style={styles.title}>Enter the verification code we just sent to your email address.</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputView}
          maxLength={1}
          onChangeText={(text) => handleTextChange(text, input1Ref)}
          ref={input1Ref}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.inputView}
          maxLength={1}
          onChangeText={(text) => handleTextChange(text, input2Ref)}
          ref={input2Ref}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.inputView}
          maxLength={1}
          onChangeText={(text) => handleTextChange(text, input3Ref)}
          ref={input3Ref}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.inputView}
          maxLength={1}
          onChangeText={(text) => handleTextChange(text, input4Ref)}
          ref={input4Ref}
          keyboardType="numeric"
        />
      </View>
        </KeyboardAvoidingView>
      <TouchableOpacity style={styles.button}>
        <Button
                  onPress={moveToResetPassword}
                  label="Reset Password"
                  className={LoginButton} disabled={false} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    marginTop: 100
  },
  inputContainer: {
    flexDirection: 'row',
    width: "90%"
  },
  inputView: {
    width: 70,
    height: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 5,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 20
  },
  button: {
    marginTop: 20,
    width: "90%"
  },
  text: {
    width: "90%",
    fontSize: 25,
    fontFamily: "Inter-ExtraBold",
    marginBottom: 20
  },
  title: {
    color: Colors.gray_02,
    display: "flex",
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 32,
    width: "90%",
    flexDirection: "column",
    flexShrink: 0,
  }
});

export default OtpVerification;