import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'

const HelpUserProfile = () => {
  return (
    <View style={{width:"50%",alignItems:"center",justifyContent:"center"}}>
    <Image 
    style={{width:100,height:100,borderRadius:50}}
    source={{uri:"https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"}} />
    <View style={{width:"100%",alignItems:"center"}}>
    <View style={{backgroundColor:theme.font_choose,borderRadius:5,alignItems:"center",width:50}}>
        <Text style={{textAlign:"center",fontSize:12}}>Demo</Text>
    </View>
    </View>
</View>
  )
}

export default HelpUserProfile

const styles = StyleSheet.create({})