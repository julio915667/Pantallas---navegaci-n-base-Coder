import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products } from "../../screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()
const MainNavigator = ()=>{
    const NameApp = "Mayoristore";
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Mayoristore', headerStyle: { backgroundColor: '#E76F51' }, headerTintColor: '#fff' }} />
            <Stack.Screen name="Productos" component={Products} options={{ title: 'Mayoristore', headerStyle: { backgroundColor: '#E76F51' }, headerTintColor: '#fff' }}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigator