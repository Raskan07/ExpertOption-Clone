import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'
import { useQuery, gql } from '@apollo/client';



const WarningModal = () => {


  return (
    <View style={styles.conatiner}>
     <View style={styles.main}>
        <Text style={styles.tit}>Please make your first deposit before requesting a withdrawal</Text>
     </View>
    </View>
  )
}

export default WarningModal

const styles = StyleSheet.create({
    conatiner:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    main:{
        width:"85%",
        borderRadius:5,
        borderWidth:1,
        borderColor:theme.font_warning,
        padding:5,
        alignItems:"center",
        backgroundColor:theme.bg_warning
    },
    tit:{
        fontSize:14,
        textTransform:"capitalize",
        color:theme.font_warning,
        padding:10,
        lineHeight:20,
        textAlign:"center"
    }
})