import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign,Entypo } from '@expo/vector-icons';
import theme from '@/src/constent/theme';

const BottomSettingBar = () => {
    const [isSetting,setSetting] = useState(false);
    const [isStacks,setStacks] = useState(false);
    console.log("isSetting",isSetting)
    console.log("isStacks",isStacks)

    const openSetting = () => {
        if(isSetting === false){
            setSetting(true)
        }else{
            setSetting(false);
        }
    }
    const OpenStates = () => {
        if(isStacks === false){
            setStacks(true)
        }else{
            setStacks(!true)
        }
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={openSetting}>
            <AntDesign name="setting" size={20}  style={[styles.icon,isSetting ? {color:theme.font_primary} : {color:theme.font_secondary}]}  />
        </TouchableOpacity>
        {isStacks === false &&
        <TouchableOpacity onPress={OpenStates}>
            <Entypo name="network" size={20}      style={[styles.icon,isStacks ? {color:theme.font_primary} : {color:theme.font_secondary}]} />
        </TouchableOpacity>}
        { isStacks === true &&
        <View style={styles.extendConatiner}>
        <AntDesign name="plus" size={20} color={theme.font_primary}  onPress={() => console.log("adding pattern still not completed")}/>
        <AntDesign name="down" size={20} color={theme.font_primary} onPress={() => setStacks(false)} />
        </View>}

    </View>
  )
}

export default BottomSettingBar

const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding:10,
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row",
        gap:150
    },
    icon:{
        padding:5,
        backgroundColor:theme.container_bg,
        borderRadius:5,
        borderWidth:1,
        borderColor:theme.font_secondary,
        alignItems:"center",

    },
    extendConatiner:{
        padding:5,
        backgroundColor:theme.container_bg,
        borderRadius:5,
        borderWidth:1,
        borderColor:theme.font_secondary,
        alignItems:"center",
        flexDirection:"column",
        gap:15,
        justifyContent:"center"
    }
})