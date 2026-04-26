import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';


const HomeScreen: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Header title="Home Page" />

      <Text style={styles.text}>My New Demo Application🚀</Text>

      <Text style={styles.counter}>Count: {count}</Text>

      <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Go to Gold screen " onPress={()=>navigation.navigate("GoldScreen")}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  counter: {
    fontSize: 22,
    marginBottom: 10
  }
});