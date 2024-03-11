import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'
import { FontAwesome6 } from '@expo/vector-icons';


const CustomMessage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.col1}>
            <FontAwesome6 name="headphones" size={24} color={theme.font_secondary} />
            <View style={{width:"70%"}}>
                <Text style={styles.tt1}>Customer SUpport</Text>
                <Text style={styles.tt2}>24 hours a day , 7 days a week</Text>
            </View>
        </View>
        <View style={styles.col2}>
            <Text style={[styles.tt2,{marginTop:12}]}>Emails</Text>
            <Text style={[styles.tt1,{textTransform:"none",marginTop:4}]}>raskanr.j07@gmail.com</Text>
        </View>
     
    </View>
  )
}

export default CustomMessage

const styles = StyleSheet.create({
    container:{
        width:"90%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:theme.container_bg_secondary,
        padding:10,
        marginTop:20,
        borderRadius:5,
        borderLeftWidth:1,
        borderLeftColor:theme.customBtn
    },
    col1:{
        width:"100%",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    tt1:{
        fontSize:16,
        color:theme.font_primary,
        fontWeight:"300",
        textTransform:"capitalize"
    },
    tt2:{
        fontSize:15,
        color:theme.font_secondary,
        fontWeight:"300",
    },
    col2:{
        width:"100%",
        justifyContent:"flex-start",
        marginLeft:10
    }
})