import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'
import { SimpleLineIcons,AntDesign } from '@expo/vector-icons';
import {LineGraph,GraphPoint} from "react-native-graph"


const StcokCard = ({stock}:any) => {
    const stockRatio = stock?.percent_change
  return (



        <View
         
        style={{margin:5,padding:5,alignItems:"center",gap:5}}>
        <View style={styles.TitleContainer}>
            <Text style={styles.stock}>{stock?.symbol}</Text>
            <Text style={styles.stock_name}>{stock?.name?.slice(0,9)}..</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10}}>
        <Text style={[styles.ratio, stockRatio < 0 ? {backgroundColor:theme.danger} : {backgroundColor:theme.green}]}>{stockRatio < 0 ? "" : "+"}{Number(stockRatio).toFixed(2)}</Text>
       </View>
        </View>
  )
}

export default StcokCard

const styles = StyleSheet.create({
    container:{
        width:"80%",
        alignItems:"center",
        justifyContent:"center",
        
    },
    main:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:theme.container_bg,
        padding:5,
        borderWidth:0.4,
        borderColor:theme.bar,
        borderRadius:5,
        shadowColor:theme.bar,
        elevation:2,
        margin:10
    },
    TitleContainer:{
        marginLeft:15
    },
    stock:{
        fontSize:15,
        color:theme.font_primary,
        textTransform:"uppercase",
        fontWeight:"700"
    },
    stock_name:{
        fontSize:11,
        color:theme.font_secondary,
        textTransform:"capitalize",
    },
    ratio:{
        fontSize:15,
        color:theme.font_primary,
        padding:3,
        borderRadius:15,
        shadowColor:theme.font_primary,
        elevation:1
    },
    header:{
        width:"80%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    headerTitle:{
        padding:5,
        color:theme.font_secondary,
        textTransform:"capitalize",
        fontSize:15
    }
})