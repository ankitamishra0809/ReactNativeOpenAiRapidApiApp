import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
export default function App() {

  return (
  <NavigationContainer>
    <MainStackNavigator>
      
    </MainStackNavigator>
  </NavigationContainer>
  )

}
