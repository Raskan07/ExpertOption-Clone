import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'
import { EvilIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const AuthHeader = ({title,sub}:any) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.sub}>{sub}</Text>
        </View>
        <EvilIcons name="close" size={24} color={theme.font_primary} onPress={() => router.push("/(tabs)/")} />
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding:10,
        marginTop:35,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:theme.bg
    },
    title:{
        fontSize:18,
        fontWeight:"500",
        textTransform:"uppercase",
        color:theme.font_primary
    },
    sub:{
        fontSize:14,
        color:theme.font_secondary,
        fontWeight:"400",
        textTransform:"capitalize",
        marginTop:4
    }
})