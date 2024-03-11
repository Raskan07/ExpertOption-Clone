import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import Header from '../../components/HomeComponents/Header'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import theme from '../../constent/theme';
import Accounts from '../../components/HomeComponents/BottamSheetComponets/Accounts';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import Graph from '../../../src/components/HomeComponents/graph/Graph';


const HomeScreen = () => {
    const snapPoints = useMemo(() => ['10%', '30%'], []);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [isModalOpen,setModalOpen] = useState(false);

    const renderBackdrop = useCallback(
		(props: any) => (
    <>
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}  />
    </>),
		[]
	);

  console.log("is",isModalOpen)
  const navigation = useNavigation();
  console.log()

  const onTogle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const handleActions = (index:any) => {
    console.log("index :", index)
    if(index === null || index === -1){
      setModalOpen(false)
    }else{
      setModalOpen(true);
    }
  }

  console.log("ismodal",isModalOpen)


  return (
    <View style={[{flex:1,backgroundColor:theme.bg},StyleSheet.absoluteFill]}>
      <View style={{marginTop:50}}>
        <Header onpress={() =>bottomSheetRef.current?.expand()} openDrawer={onTogle}/>
      </View>
      <Graph/>
      <BottomSheet 
      index={-1} 
      snapPoints={snapPoints}
      onChange={(index) => handleActions(index)}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ backgroundColor: theme.container_bg_secondary }}
      backgroundStyle={{ backgroundColor: theme.container_bg_secondary,borderTopLeftRadius:30,borderTopRightRadius:30,borderWidth:0.3,borderColor:theme.font_secondary }}
      backdropComponent={renderBackdrop}
      >
        <Accounts onpressClose={() =>bottomSheetRef.current?.close() }/>
      </BottomSheet>      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})