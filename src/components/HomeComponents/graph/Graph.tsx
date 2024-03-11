import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {LineGraph,GraphPoint} from "react-native-graph"
import timeSerious from "../../../../assets/data/timeseries.json"
import theme from '../../../../src/constent/theme'
import { useState,useRef } from 'react'
import BottomSettingBar from './bottomSettingBar'
import StcokCard from '../Stcok/StcokCard'
import StockList from '../Stcok/StockList'
import { useQuery, gql } from '@apollo/client';
import Top5 from "../../../../assets/data/top5.json"
import CustomLoader from '../../CustomLoader'

const query = gql`
query MyQuery($symbol: String) {
  quotes(symbol: $symbol) {
    value {
      name
      symbol
      close
      percent_change
    }
  }
}
`


const Graph = () => {
  
  const {data,loading,error} = useQuery(query,{variables:{symbol:'AAPL,IBM,META,AMZN,GOOG,MG,TSLA,DELL'}});
  if(loading){
    return <CustomLoader />
  }

  if(error){
    return ;
  }

  const stocks =  data.quotes.map((q:any) => q.value);

  return (
    <View style={styles.container}>
          <StockList stocks={stocks} />
    </View>
  )
}

export default Graph

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        alignItems:"center"
    }
})