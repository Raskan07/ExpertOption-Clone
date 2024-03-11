import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import theme from '@/src/constent/theme'
import { AntDesign,Feather } from '@expo/vector-icons';


const SingInAuth = () => {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <AntDesign name="user" size={20} color={theme.font_primary}  style={{paddingLeft:10}}/>
        <TextInput
          value={userName}
          onChangeText={setUserName}
          placeholder='E-mail'
          placeholderTextColor={theme.font_secondary}
          style={{paddingLeft:15,color:theme.font_primary,width:"80%"}}
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color={theme.font_primary}  style={{paddingLeft:15}}/>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder='Password'
          placeholderTextColor={theme.font_secondary}
          style={{paddingLeft:15,color:theme.font_primary,width:"80%"}}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={{width:"92%",marginTop:15}}>
        <Text style={{color:theme.font_secondary}}>Forgot Password?</Text>
      </TouchableOpacity>


      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTitle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SingInAuth

const styles = StyleSheet.create({
  container:{
    marginTop:40,
    padding:10,
    flexDirection:"column",
    width:"100%",
    alignItems:"center"
  },
  inputContainer:{
    width:"92%",
    padding:5,
    borderRadius:5,
    backgroundColor:theme.container_bg_secondary,
    flexDirection:"row",
    alignItems:"center",
    elevation:1,
    marginTop:17
  },
  btnContainer:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:35
  },
  btn:{
    width:"92%",
    padding:5,
    backgroundColor:theme.bar,
    borderRadius:7,
    alignItems:"center",
    justifyContent:"center"
  },
  btnTitle:{
    color:theme.font_primary,
    fontSize:17,
    fontWeight:"500",
    padding:5
  }
})