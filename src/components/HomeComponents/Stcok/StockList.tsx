import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import StcokCard from './StcokCard'
import { AntDesign } from '@expo/vector-icons'
import theme from '@/src/constent/theme'
import Top5 from "../../../../assets/data/top5.json"
import { useQuery, gql } from '@apollo/client';
import {LineGraph,GraphPoint} from "react-native-graph"
import timeSerious from "../../../../assets/data/timeseries.json"
import BottomSettingBar from '../graph/bottomSettingBar'
import Graphdata from "../../../../assets/data/GraphData.json"





const query = gql`
query MyQuery($interval:String!,$symbol:String!) {
  time_series(interval: $interval, symbol: $symbol) {
    status
    values {
      close
      datetime
    }
  }
}
`

const StockList = ({stocks}:any) => {
  const [selectedPoint,setSelectedPoint] = useState<GraphPoint>()
  const [selectedSymbol,setSymbol] = useState('AAPL');
  console.log(selectedSymbol)

  const [graphData,setGraphData] = useState<any>([]);


  const {data,loading,error} = useQuery(query,{variables:{interval:"1min",symbol:`${selectedSymbol}`}});

  const Point2: GraphPoint[] = Graphdata.flatMap((value) =>
  value.AAPL?.time_series.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number(value.close),
  })) ?? []
);




  console.log(data?.time_series)

    const points : GraphPoint[] = data?.time_series?.values?.map((value:any) => ({
      date:new Date(value.datetime),
      value: Number.parseFloat(value.close),
  }))

  console.log(data?.time_series?.values?.length)

  



  const onPointSelect = (point: GraphPoint) => {
    console.log("point",point)
    setSelectedPoint(point)
  }




  return (
    <View style={styles.container}>
      <View style={{width:"100%",alignItems:"center",flexDirection:"row",justifyContent:"center"}}>
          {/* price tag */}
          <View style={{padding:2,backgroundColor:theme.container_bg,width:"40%",alignItems:"center",borderRadius:5,borderWidth:0.2,borderColor:theme.font_secondary}}>
            <Text style={{fontSize:15,color:theme.font_secondary}}>EUR/USD</Text>
            <Text style={{color:theme.font_primary}}><Text style={{color:theme.font_primary,fontWeight:"300"}}>$</Text> {selectedPoint?.value.toFixed(1)}.0</Text>
          </View>
          {/* date-tag */}
          { selectedPoint &&
          <View style={{padding:3,backgroundColor:theme.container_bg,borderRadius:2,borderWidth:0.2,borderColor:theme.font_secondary,alignItems:"center",justifyContent:"center",marginLeft:30}}>
            <Text style={{color:theme.font_secondary}}>{selectedPoint?.date.toDateString()}</Text>
          </View> }
        </View>
        <View>
        <LineGraph
          style={{width:"100%",height:400}}
          points={data?.time_series?.values?.length < 1 || data?.time_series?.values?.length == null ? Point2 : points} 
          color={theme.bar}
          animated={true}
          gradientFillColors={[theme.extend,theme.bg]}
          lineThickness={7}
          enableFadeInMask={true}
          enablePanGesture={true}
          onPointSelected={onPointSelect}
          indicatorPulsating
          />

        </View>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Stocks</Text>
            <AntDesign name="down" size={12} color={theme.font_secondary} />
        </View>
        <View>
          <BottomSettingBar />
        </View>
    <FlatList 
    data={stocks}
    keyExtractor={(id) => id.symbol}
    renderItem={({index,item}) => (
      <TouchableOpacity onPress={() => setSymbol(item.symbol)}>
                    <StcokCard stock={item} />
      </TouchableOpacity>
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    />
    </View>
  )
}

export default StockList

const styles = StyleSheet.create({
    header:{
        width:"80%",
        flexDirection:"row",
        alignItems:"center",
        marginLeft:20,
        
    },
    headerTitle:{
        padding:5,
        color:theme.font_secondary,
        textTransform:"capitalize",
        fontSize:15
    },
    container:{
  }
})