import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HeaderBS from './Header'
import Checkbox from 'expo-checkbox';
import theme from '../../../../src/constent/theme';

const Accounts = ({onpressClose}:any) => {
      const [isChecked, setChecked] = useState(false);
      const [isDemoAccountActivate,setDemoAccountActivate] = useState(true)

      const activeReal = () => {
        setDemoAccountActivate(false);
        setChecked(true)
      }

       const activeDemo = () => {
        setDemoAccountActivate(true);
        setChecked(false)
      }
  return (
    <View style={{width:"100%",marginTop:-10,alignItems:"center"}}>
     <HeaderBS onpress={onpressClose}/>
     {/* Real */}
     <TouchableOpacity
     onPress={activeReal} 
     style={{backgroundColor:theme.container_bg_territory,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
     <View style={styles.accountContainer}>
     <Checkbox
          style={{borderRadius:15,padding:5}}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? theme.font_choose : undefined}
        />
        <Text style={[styles.txt,isChecked ? {color:theme.font_primary} : {color:theme.font_secondary},{right:70}]}>Real</Text>
        <Text style={[styles.txt,isChecked ? {color:theme.font_primary} : {color:theme.font_secondary}]}>$0.00</Text>
     </View>
     <TouchableOpacity style={{width:"100%",alignItems:"center",justifyContent:"center",paddingBottom:6}}>
        <Text style={{fontSize:16,fontWeight:"500",color:theme.green}}>Open real acoount</Text>
     </TouchableOpacity>
     </TouchableOpacity>
     {/* Demo */}
      <TouchableOpacity 
      onPress={activeDemo}
      style={styles.accountContainer}>
     <Checkbox
          style={{borderRadius:15,padding:5}}
          value={isDemoAccountActivate}
          onValueChange={setDemoAccountActivate}
          color={isChecked ? theme.font_choose : theme.font_choose}
        />
        <Text style={[styles.txt,isDemoAccountActivate ? {color:theme.font_choose} : {color:theme.font_secondary},{right:50}]}>Demo</Text>
        <Text style={[styles.txt,isDemoAccountActivate ? {color:theme.font_primary} : {color:theme.font_secondary}]}>$10000.00</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Accounts

const styles = StyleSheet.create({
    accountContainer:{
        width:"90%",
        padding:15,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:theme.container_bg_territory,
        borderRadius:15,
        marginTop:10
    },
    txt:{
        fontSize:18,
        textTransform:"uppercase",
        
    }
})