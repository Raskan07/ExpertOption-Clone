import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import theme from '../constent/theme'

const CustomStack = ({title}:any) => {
  return (
    <Stack.Screen options={{
        headerShown:true,
        headerStyle:{backgroundColor:theme.container_bg_secondary},
        headerTintColor:theme.font_primary,
        headerTitleAlign:"center",
        // @ts-ignore
        headerTitle:`${title}`,
        headerTitleStyle:{fontSize:17,fontWeight:"500"},
        headerShadowVisible:false
      }}/>
  )
}

export default CustomStack

const styles = StyleSheet.create({})