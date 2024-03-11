import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import theme from '../constent/theme'
import { AntDesign } from '@expo/vector-icons';
import { Link, router, useNavigation } from 'expo-router'

const CustomDrawerContent = (props:any) => {
    const {top,bottom} = useSafeAreaInsets();

    const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
        <View style={{width:"100%",padding:10,flexDirection:"row",marginBottom:15}}>
            {/* user-profile */}
            <View style={{width:"50%",alignItems:"center",justifyContent:"center"}}>
                <Image 
                style={{width:100,height:100,borderRadius:50}}
                source={{uri:"https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"}} />
                <View style={{width:"100%",alignItems:"center"}}>
                <View style={{backgroundColor:theme.font_choose,borderRadius:5,alignItems:"center",width:50}}>
                    <Text style={{textAlign:"center",fontSize:12}}>Demo</Text>
                </View>
                </View>
            </View>
            {/* id and account type */}
            <View style={{width:"50%",alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={{color:theme.font_primary,fontSize:15,fontWeight:"400",marginLeft:4}}>$ 10000.00</Text>
                <Text style={{color:theme.font_secondary,fontSize:15,fontWeight:"500",marginLeft:4}}>366-773-993</Text>
            </View>

        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
    {/* bottom part */}
    <View style={{width:"100%",padding:5,marginBottom:bottom,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderTopWidth:0.2,borderTopColor:theme.font_secondary,elevation:1}}>
        <TouchableOpacity style={{width:"50%",alignItems:"center",justifyContent:"center",padding:5}}>
            <AntDesign name="setting" size={18} color={theme.font_secondary} />
            <Text style={{fontSize:14,color:theme.font_secondary,fontWeight:"400",fontFamily:"Inter"}}>Setting</Text>
        </TouchableOpacity>
       
       
        <TouchableOpacity onPress={() => router.push("/auth/Login")} style={{width:"50%",alignItems:"center",justifyContent:"center",padding:5}}>
            <AntDesign name="login" size={18} color={theme.bar} />
            <Text style={{fontSize:14,color:theme.bar,fontWeight:"400",fontFamily:"Inter"}}>Login</Text>
        </TouchableOpacity>
       
      
    </View>
    </View>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({})