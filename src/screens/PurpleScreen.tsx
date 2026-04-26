import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PurpleScreen = () => {
    const navigation=  useNavigation()
  return (
    <View style={styles.container}>
      <Text>PurpleScreen</Text>
      <Button title="Go Back to home" onPress={()=>navigation.popToTop()}></Button>
    </View>
  )
}

export default PurpleScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor :"purple",
        justifyContent:"center",
        alignItems:"center"
    }
})