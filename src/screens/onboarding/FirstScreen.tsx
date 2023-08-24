import React from 'react'
import { View , Text, Image, StyleSheet} from 'react-native'
import { Colors } from '../../styles/colors'

export const FirstScreen = () => {
  return (
    <View style={styles.Container}>
       <Image source= {require("../../../assets/logo-color.png" )}style={{height:400,width:400}}></Image>
       <View style={{justifyContent:"center",display:"flex",}}>
        <Text style={styles.text}>From</Text>
         <View style={styles.Textcontainer}>
          <Image source={require("../../../assets/itonic-labs-logo.png")}style={{height:16,width:18}}></Image>
          <Text>ITonic Labs</Text>
         </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
Container:{
    display:"flex",
    justifyContent:"center",
},
Textcontainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    fontWeight:"600",
    fontSize:12,
    color:Colors.black_03,

},
text:{
    textAlign:"center",
    color:Colors.black_03,
    fontSize:8,
    fontWeight:"400",
    fontFamily:"Inter-Regular",

}
})