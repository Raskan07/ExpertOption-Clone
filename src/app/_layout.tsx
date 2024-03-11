
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router';
import { Platform } from 'react-native';
import StartingAnimation from '../components/StartingAnimation';

import {
    useFonts,
    Inter_900Black,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_400Regular,
  } from '@expo-google-fonts/inter';
  import {
    AmaticSC_400Regular,
    AmaticSC_700Bold,
  } from '@expo-google-fonts/amatic-sc';
  
  import * as SplashScreen from 'expo-splash-screen';
  import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
  import client from '../appolo/client';
  import { useQuery, gql } from '@apollo/client';




  SplashScreen.preventAutoHideAsync();

  export default function RootLayout(){
    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);



    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_400Regular,
        InterSemi: Inter_600SemiBold,
        InterBold: Inter_700Bold,
        InterBlack: Inter_900Black,
    
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
      });


    
      useEffect(() => {
        if (fontsLoaded || fontError) {
          SplashScreen.hideAsync();
          setAppReady(true)
        }
      }, [fontsLoaded, fontError]);

      if(!appReady || !splashAnimationFinished){
        return (
            <StartingAnimation animationRender={() => setSplashAnimationFinished(true)} />
        )
      }



      return (
        <GestureHandlerRootView style={{flex:1}}>
          <ApolloProvider client={client}>
        <Stack screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='(tabs)' />
        </Stack>
        </ApolloProvider>
        </GestureHandlerRootView>
      )
    

  }

const styles = StyleSheet.create({})