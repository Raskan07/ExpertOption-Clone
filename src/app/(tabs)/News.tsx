import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomStack from '@/src/components/CustonStack'
import theme from '@/src/constent/theme'
import NewsCard from '@/src/components/News/NewsCard'
import NewsList from '@/src/components/News/NewsList'

const News = () => {
  return (
    <View style={[StyleSheet.absoluteFill,styles.container]}>
      <CustomStack title="News"/>
      <NewsList />
    </View>
  )
}

export default News

const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:theme.bg
  }
})