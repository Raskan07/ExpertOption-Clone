import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomStack from '@/src/components/CustonStack'
import theme from '@/src/constent/theme'
import HelpUserProfile from '@/src/components/HomeComponents/Help/HelpUserProfile'
import CustomBtn from '@/src/components/HomeComponents/Help/CustomBtn'
import CustomMessage from '@/src/components/HomeComponents/Help/CustomMessage'

const Help = () => {
  return (
    <View style={[StyleSheet.absoluteFill,styles.container]}>
     <CustomStack title="Help" />
     {/* header */}
     <View style={{marginTop:40,alignItems:"center",justifyContent:"center",width:"100%"}}>
      <HelpUserProfile /> 
      <Text style={styles.id}>366-765-844</Text>
      <CustomBtn />
      <CustomMessage />
     </View>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:theme.bg,
    alignItems:"center"
  },
  id:{
    marginTop:15,
    fontSize:16,
    fontWeight:"600",
    color:theme.font_secondary,
    letterSpacing:0.6
  }
})