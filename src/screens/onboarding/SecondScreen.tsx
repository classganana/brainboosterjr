import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Button } from '../../components/common/ButttonComponent/Button'
import { next } from '../../components/common/ButttonComponent/ButtonStyles'
import { Colors } from '../../styles/colors'

export const SecondScreen = () => {
    const navigation = useNavigation();
    const ThirdScreen = () => {
        console.log(File);
    };
  return (
    <View style={styles.Container}>
        <Image source={require("../../../assets/first.gif")}style={{height:333,width:372}}></Image>
        <Text style={styles.text1}>Solve Instant Doubts</Text>
        <Text style={styles.text}> Instantly conquer confusion! Get answers to your questions and overcome doubts in a snap </Text>
        <View style={styles.buttoncontainer}>
        <Button
              onPress={() => ThirdScreen()}
              label={"Next"}
              className={next}
              disabled={false}
            />
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    Container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        textAlign:"center",
        display:"flex",
        fontSize:20,
        fontWeight:"500",
        color:Colors.black_06,
    },
    text1:{
        fontWeight:"600",
        fontSize:24,
        color:Colors.black_06,
    },
    buttoncontainer:{
        display:"flex",
        width:"50%",

    }
})