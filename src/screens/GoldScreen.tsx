import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const GoldScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>GoldScreen</Text>
      <Button title="Go to Purple Screen" onPress={()=>navigation.navigate("PurpleScreen")}></Button>
    </View>
  )
}

export default GoldScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor :"gold",
        justifyContent:"center",
        alignItems:"center"
    }
})