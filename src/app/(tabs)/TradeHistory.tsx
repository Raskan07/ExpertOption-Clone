import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import theme from '@/src/constent/theme'
import CustomStack from '@/src/components/CustonStack'

const TradeHistory = () => {
  const  [history,setHistory] = useState([]);
  return (
    <View style={[styles.container,StyleSheet.absoluteFill]}>
     <CustomStack title={`Trade history`} />
      {
        history.length == 0 || history.length == null ? <Text style={{color:theme.font_secondary}}>No Transaction yet</Text> : null // replace with custom card
      }
    </View>
  )
}

export default TradeHistory

const styles = StyleSheet.create({
  container:{
    backgroundColor:theme.bg,
    alignItems:"center",
    flex:1,
    justifyContent:"center"
  }
})