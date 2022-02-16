import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Home from './screens/home'
import TaskForm from "./screens/taskForm";


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="TaskForm">
        <Stack.Screen name="Home" component={Home}
          options={({ navigation }) => ({
            title: 'Home',
            headerLeft: ()=> null,
            headerStyle: {
              backgroundColor: 'indigo'
            },
            headerTitleStyle: { color: "#ffffff" }
          })} />
        <Stack.Screen name="TaskForm" component={TaskForm}
          options={({ navigation }) => ({
            title: 'Inicio de Sesión',
            headerStyle: {
              backgroundColor: 'indigo'
            },
            headerTitleStyle: { color: "#fff" },
          })} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App