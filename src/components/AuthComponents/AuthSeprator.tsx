import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'

const AuthSeprator = ({title}:any) => {
  return (
    <View style={{width:"100%",alignItems:"center",justifyContent:"center",marginTop:5}}>
      <Text style={{fontSize:15,color:theme.font_primary,fontWeight:"300"}}>{title}</Text>
    </View>
  )
}

export default AuthSeprator

const styles = StyleSheet.create({})