import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { FirstScreen } from './src/screens/onboarding/FirstScreen';
import { SecondScreen } from './src/screens/onboarding/SecondScreen';


export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <View style={styles.container}>
      {/* <Text>Yup</Text> */}
      {isLoading ? (
        <FirstScreen />
      ) : 
    <AppNavigator />
  }
  <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
