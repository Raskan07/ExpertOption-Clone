import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'
import { FontAwesome6 } from '@expo/vector-icons';

const CustomBtn = () => {
  return (
    <TouchableOpacity onPress={() =>console.log("still not done")} style={styles.container}>
      <FontAwesome6 name="headphones" size={24} color={theme.font_primary} />
      <Text style={styles.title}>Chat with support</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    container:{
        width:"90%",
        borderRadius:10,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:theme.customBtn,
        marginTop:20,
        flexDirection:"row",
        gap:10
    },
    title:{
        color:theme.font_primary,
        fontWeight:"600",
        fontSize:15,
        textTransform:"capitalize"

    }
})