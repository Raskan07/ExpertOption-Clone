import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const CustomLoader = () => {
    const animation = useRef(null);
  return (
    <View style={{width:"100%",alignItems:"center",justifyContent:"center",padding:10}}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 50,
          height: 50,
        }}
        source={require('../../assets/animation/expertOptionLoading.json')}
      />
    </View>
  )
}

export default CustomLoader

const styles = StyleSheet.create({})