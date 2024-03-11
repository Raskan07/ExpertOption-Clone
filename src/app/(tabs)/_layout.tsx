import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { Drawer } from "expo-router/drawer";
import theme from '../../../src/constent/theme';
import { Entypo,AntDesign,Ionicons} from '@expo/vector-icons';
import {DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer"
import CustomDrawerContent from '../../../src/components/CustomDrawerContent';




const DrawerLayout = () => {
  return (
    <Drawer 
    initialRouteName='index' 
    drawerContent={CustomDrawerContent}
    screenOptions={{
        drawerStyle:{backgroundColor:theme.bg,marginTop:25},
        headerShown:false,
        drawerActiveBackgroundColor:theme.container_bg_territory,
        drawerActiveTintColor:theme.font_primary,
        drawerInactiveTintColor:theme.font_secondary,
        drawerHideStatusBarOnOpen:true
    }}
    
    >
        <Drawer.Screen  name='index' options={{
            drawerLabel:"Trade",
            drawerIcon:({color,size}) => (
                <Entypo name="line-graph" size={size-5} color={color} />
            ),
            drawerLabelStyle:{fontSize:15,fontWeight:"400",marginLeft:-10}
           
        }}/>
        <Drawer.Screen  name='TradeHistory' options={{
            drawerLabel:"Trade History",
            drawerIcon:({color,size}) => (
                <AntDesign name="bars" size={size-5} color={color} />
            ),
            drawerLabelStyle:{fontSize:15,fontWeight:"400",marginLeft:-10}
           
        }}/>
        <Drawer.Screen  name='Withdrawl' options={{
            drawerLabel:"Withdrawal",
            drawerIcon:({color,size}) => (
                <Ionicons name="wallet-outline" size={size-5} color={color} />
            ),
            drawerLabelStyle:{fontSize:15,fontWeight:"400",marginLeft:-10}
           
        }}/>  
        <Drawer.Screen  name='News' options={{
            drawerLabel:"News",
            drawerIcon:({color,size}) => (
                <Ionicons name="newspaper-outline" size={size-5} color={color} />
            ),
            drawerLabelStyle:{fontSize:15,fontWeight:"400",marginLeft:-10}
           
        }}/>
        <Drawer.Screen  name='Help' options={{
            drawerLabel:"Help",
            drawerIcon:({color,size}) => (
                <AntDesign name="exclamationcircleo" size={size-5} color={color} />
            ),
            drawerLabelStyle:{fontSize:15,fontWeight:"400",marginLeft:-10}
           
        }}/>        
    </Drawer>
  )
}

export default DrawerLayout

const styles = StyleSheet.create({})