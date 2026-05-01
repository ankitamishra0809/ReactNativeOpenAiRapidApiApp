import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PurpleScreen from "../screens/PurpleScreen";
import GoldScreen from "../screens/GoldScreen";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";


const Stack = createNativeStackNavigator()
function MainStackNavigator(){

    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen options= {{headerShown:false}}
            name="HomeScreen" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='PurpleScreen' component={PurpleScreen}></Stack.Screen>
            <Stack.Screen name="GoldScreen" component={GoldScreen}></Stack.Screen>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name="CreateAccount" component={CreateAccount}></Stack.Screen>
        </Stack.Navigator>

    )

}
export default MainStackNavigator;