import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome/'
import SignIn from '../pages/SignIn/'
import Telacad from '../pages/Telacad/'
import TelacadCli from '../pages/TelacadCli'
import TelaInicial from '../pages/TelaInicial'
import TelaInicialCli from '../pages/TelaInicialCli'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />
            
             <Stack.Screen
            name = "SignIn"
            component={SignIn}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "Telacad"
            component={Telacad}
            options={{ headerShown: false}}
            />
             <Stack.Screen
            name = "TelacadCli"
            component={TelacadCli}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "TelaInicial"
            component={TelaInicial}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "TelaInicialCli"
            component={TelaInicialCli}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}