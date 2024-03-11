import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import BlogData from "../../../assets/data/blog.json"
import NewsCard from './NewsCard'

const NewsList = () => {
  return (
    <View style={{width:"100%",marginTop:20}}>
      <FlatList 
      data={BlogData}
      keyExtractor={(key) => key.id.toString()}
      horizontal={false}
      renderItem={({item,index}) => (
        <NewsCard  data={item}/>
      )}
      numColumns={2}
      columnWrapperStyle={{marginRight:15}}
      />
    </View>
  )
}

export default NewsList

const styles = StyleSheet.create({})