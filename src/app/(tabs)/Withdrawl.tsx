import { ScrollView, StyleSheet, Text, TextInputBase, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomStack from '@/src/components/CustonStack'
import theme from '@/src/constent/theme'
import WarningModal from '@/src/components/withdrawal/WarningModal'
import { FontAwesome,Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler'
import { FontWeight } from '@shopify/react-native-skia'

const Withdrawl = () => {
  const [isRealAccount,setRealAccount] = useState(false)
  

  return (
    <ScrollView style={[styles.container,StyleSheet.absoluteFill]}>
      <CustomStack title={"Withdrawal"} />
      {
        !isRealAccount && <WarningModal /> 
      }
      <View style={{width:"100%",alignItems:"center"}}>
        <View style={styles.cdm}>
          {/* card name */}
          <View style={styles.inputCard}>
          <FontAwesome name="cc-mastercard" size={24} color="#189BDB" style={{left:10,width:"15%",alignItems:"center",justifyContent:"center"}} />
          <TextInput 
          placeholder='VISA ,Master Card,Meastro'
          style={styles.cardName}
          placeholderTextColor={theme.font_secondary}
          keyboardAppearance="dark"
          keyboardType="number-pad"
          />
          </View>
          {/* Amount */}
          <View style={styles.inputCard}>
          <FontAwesome name="dollar" size={20} color={theme.font_secondary} style={{left:10,width:"15%",alignItems:"center",justifyContent:"center"}} />
          <TextInput 
          placeholder='Amount'
          style={styles.cardName}
          placeholderTextColor={theme.font_secondary}
          keyboardAppearance="dark"
          />
          </View>
          {/* card number  */}
          <View style={styles.inputCard}>
          <Entypo name="credit-card" size={24} color={'#039CDB'} style={{left:10,width:"15%",alignItems:"center",justifyContent:"center"}} />
          <TextInput 
          placeholder='Card Number'
          style={styles.cardName}
          placeholderTextColor={theme.font_secondary}
          keyboardAppearance="dark"
          />
          </View>

          {/* request btn  */}
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.req}>New Request</Text>
          </TouchableOpacity>

          <View style={{width:"100%",backgroundColor:"gray",height:0.5,marginTop:20}}></View>
        
        </View>

        {isRealAccount &&
        <View style={{alignItems:"center",justifyContent:"center"}}>
          <Text style={styles.countion}>Left For Withdrawal Without KYC</Text>
          <Text style={[styles.countion,{fontSize:17,marginTop:5}]}>$250</Text>
        </View>}
        
      </View>
      
    </ScrollView>
  )
}

export default Withdrawl

const styles = StyleSheet.create({
  container:{
    backgroundColor:theme.bg,
    width:"100%"
  },
  cdm:{
    padding:10,
    width:"85%",
    marginTop:10,
  },
  inputCard:{
    width:"100%",
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:theme.container_bg,
    padding:5,
    marginTop:10,
    paddingLeft:15,
    paddingRight:15,
        
  },
  cardName:{
    fontSize:15,
    color:theme.font_secondary,
    fontWeight:"400",
    marginLeft:10,
    padding:5,
  },
  btn:{
    width:"100%",
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    backgroundColor:"#5DBFA6",
    marginTop:20
  },
  req:{
    fontSize:16,
    textTransform:"uppercase",
    color:theme.font_primary
  },
  countion:{
    color:theme.font_secondary,
    fontWeight:"400",
    fontSize:15,
    letterSpacing:0.4
  }
})