import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PurpleScreen from "../screens/PurpleScreen";
import GoldScreen from "../screens/GoldScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator()
function MainStackNavigator(){

    return (
        <Stack.Navigator>
            <Stack.Screen options= {{headerShown:false}}
            name="HomeScreen" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='PurpleScreen' component={PurpleScreen}></Stack.Screen>
            <Stack.Screen name="GoldScreen" component={GoldScreen}></Stack.Screen>
        </Stack.Navigator>

    )

}
export default MainStackNavigator;