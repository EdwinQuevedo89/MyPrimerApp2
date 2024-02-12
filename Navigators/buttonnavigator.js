import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//para implementar navegadores envolverlo en un contenedor de navegadores
import { NavigationContainer } from '@react-navigation/native';
//importar iconos 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import Bienvenido from '../screens/Bienvenido';
import Dividir from '../screens/Dividir';   

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Bienvenido" component={Bienvenido} 
            options={{tabBarIcon:()=>(
                <MaterialCommunityIcons name="home-circle-outline" size={38} color="blue" />
                )}}/>

            <Tab.Screen name="Calcular" component={Dividir} 
            options={{tabBarIcon:()=>(
                <FontAwesome5 name="divide" size={34} color="blue" />
                )}}/>
        </Tab.Navigator>
    )

}

//funcion para llamar al navegador cuando se quiera (componetes)
export default function TabNavigator () {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}