import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '@/src/constent/theme'
import AuthHeader from '@/src/components/AuthComponents/AuthHeader'
import SingInAuth from '@/src/components/AuthComponents/SignIn'
import AuthSeprator from '@/src/components/AuthComponents/AuthSeprator'
import { Stack } from 'expo-router'
import SocialAuthBtn from '@/src/components/AuthComponents/SocialAuthBtn'

const Login = () => {
  const google = require("../../../assets/logos/google.png")
  const faceBook = require("../../../assets/logos/facebook.png")

  return (
    <View style={[StyleSheet.absoluteFill,styles.container]}>

      <Stack.Screen options={{
        presentation:"formSheet"
      }} />

      <AuthHeader title="Login to exiting account" sub="if you have an account , please Login Here" />
      <SingInAuth />
      <AuthSeprator title="Or Login with :"/>
      <SocialAuthBtn
        bgColor={theme.faceBook}
        logo={faceBook}
        title="FaceBook"
        fontColor={theme.font_primary}
        onpress={() => console.log("faceBook")}
      />
      <SocialAuthBtn
        bgColor={theme.font_primary}
        logo={google}
        title="Google"
        fontColor={theme.dark}
        onpress={() => console.log("Google")}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    backgroundColor:theme.bg
  }
})