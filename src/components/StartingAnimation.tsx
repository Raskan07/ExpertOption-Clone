import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';

const StartingAnimation = ({animationRender}:any) => {
    const animationRef = useRef<LottieView>(null);

    useEffect(() => {
        animationRef.current?.play();
      }, [animationRef]);
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <LottieView
                autoPlay
                ref={animationRef}
                onAnimationFinish={animationRender}
                style={{
                width: 250,
                height: 250,
                }}
                loop={false}
                source={require("../../assets/animation/bitcoin.json")}
            />    
    </View>
  )
}

export default StartingAnimation

const styles = StyleSheet.create({})