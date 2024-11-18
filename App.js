import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './src/components/inicio';
import Register from './src/components/register';
import Carrossel from './src/components/carrossel';
import Perfil from './src/components/perfil';
import Agendamento from './src/components/agendamento';
import CalendarExample from './src/components/agendamento/calendario';
import Horario from './src/components/agendamento/horario';
import Servicos from './src/components/servicos';
import Login from './src/components/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Carrossel" component={Carrossel} />
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="Horario" component={Horario} />
        <Stack.Screen name="CalendarExample" component={CalendarExample} />
        <Stack.Screen name="Servicos" component={Servicos
        } />
        <Stack.Screen name="Login" component={Login
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
