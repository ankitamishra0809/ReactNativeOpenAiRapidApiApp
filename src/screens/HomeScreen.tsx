import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image  } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import StarsBackground from '../components/StarsBackground';


const HomeScreen: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <StarsBackground />
      <Header title="Home Page" />

      <Text style={styles.text}>Welcome to DevTechAi </Text>
       <Image
        source={require('../../assets/devtechAiLogo.png')}
        style={styles.logo}
      />

      <Text style={styles.counter}>Count: {count}</Text>
      

      <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Go to Gold screen " onPress={()=>navigation.navigate("GoldScreen")}/>
            <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />  <Button
        title="Create Your Account "
        onPress={() => navigation.navigate('CreateAccount')}
      />
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
  },
  logo:{
     width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  }
});