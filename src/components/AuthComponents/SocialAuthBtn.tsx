import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const SocialAuthBtn = ({bgColor,logo,title,fontColor,onpress}:any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onpress} style={[{backgroundColor:bgColor},styles.btn]}>
        <Image 
        source={logo}
        style={{width:26,height:26,padding:5}}
        />
        <View style={{width:"90%",alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:16,fontWeight:"500",color:fontColor,textTransform:"capitalize",marginLeft:-22,padding:5}}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SocialAuthBtn

const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:18
    },
    btn:{
        width:"90%",
        flexDirection:"row",
        justifyContent:"space-around",
        borderRadius:7,
        padding:5
    }
})