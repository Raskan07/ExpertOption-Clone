import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../../../src/constent/theme'
import { EvilIcons } from '@expo/vector-icons';

const HeaderBS = ({onpress}:any) => {
  return (
    <View style={{width:"100%",flexDirection:"row",padding:10,alignItems:"center",top:-5}}>
      <Text style={styles.title}>Accounts</Text>
      <EvilIcons name="close" size={15} color={theme.font_primary} onPress={onpress} />
    </View>
  )
}

export default HeaderBS

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:theme.font_primary,
        fontWeight:"400",
        textTransform:"capitalize",
        width:"90%",
        textAlign:"center"
    }
})