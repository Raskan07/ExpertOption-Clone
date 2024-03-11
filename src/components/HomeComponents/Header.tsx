import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../../../src/constent/theme'
import { FontAwesome6,AntDesign,EvilIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';

const Header = ({onpress,openDrawer}:any) => {
    const data = [
        {
            demo_balance:10000.00,
            real_balance:0.0
        }
    ]
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={{width:"15%",alignItems:"center",justifyContent:"center",padding:17,borderWidth:0.2,borderColor:theme.font_secondary,borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                <TouchableOpacity onPress={openDrawer}>
                    <FontAwesome6 name="bars" size={20} color={theme.font_secondary} />
                </TouchableOpacity>
            </View>
            <View style={{width:"35%",alignItems:"center",justifyContent:"center",borderWidth:0.2,borderColor:theme.font_secondary}}>
                <Text style={styles.demoAcc}>${data[0].demo_balance}</Text>
                <TouchableOpacity onPress={onpress} style={{flexDirection:"row",gap:2,alignItems:"center",}}>
                    <Text style={{color:theme.font_secondary,fontSize:11,fontWeight:"400",fontFamily:"Inter"}}>demo balance</Text>
                    <EvilIcons name="chevron-down" size={20} color={theme.font_secondary} />
                </TouchableOpacity>
            </View>
            <View style={[{width:"35%",backgroundColor:theme.bar,alignItems:"center",justifyContent:"center",borderWidth:0.2,borderColor:theme.font_secondary}]}>
                <Text style={{textTransform:"capitalize",color:theme.font_primary,fontSize:15,fontWeight:"500"}}>Finances</Text>
            </View>
            <View style={{width:"14%",borderWidth:0.2,borderColor:theme.font_secondary,borderTopRightRadius:5,borderBottomRightRadius:5,alignItems:"center",justifyContent:"center"}}>
                <MaterialCommunityIcons name="book-arrow-left-outline" size={20} color={theme.font_secondary} />
            </View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center",
    },
    header:{
        width:"90%",
        backgroundColor:theme.container_bg,
        flexDirection:"row",
        justifyContent:"space-between",
        gap:1,
        borderRadius:5
    },
    demoAcc:{
        fontSize:17,
        fontWeight:"600",
        color:theme.font_unique
    }
})