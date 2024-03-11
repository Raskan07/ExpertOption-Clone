import { StyleSheet, Text, View,TouchableOpacity,TouchableHighlight } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'
import { Image } from 'expo-image'

const NewsCard = ({data}:any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image  
      source={{uri:data.imageUri}}
      style={styles.img}
      />
      <Text style={styles.title}>{data.title.slice(0,50)}...</Text>
    </TouchableOpacity>
  )
}

export default NewsCard

const styles = StyleSheet.create({
    container:{
        width:"50%",
        padding:10,
        margin:5,
        backgroundColor:theme.container_bg_secondary,
        borderRadius:10
    },
    img:{
        width:"99%",
        height:100,
        borderRadius:3
    },
    title:{
        color:theme.font_primary,
        marginTop:5,
        textAlign:"left",
        padding:5,
        textTransform:"capitalize",
        fontWeight:"500"
    }
})