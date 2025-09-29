import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MedicamentosListScreen from "../screens/MedicamentosListScreen";
import MedicamentosFormScreen from "../screens/MedicamentosFormScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <Stack.Screen
        name="MedicamentosList"
        component={MedicamentosListScreen}
        options={{ title: "Medicamentos" }}
      />
      <Stack.Screen
        name="MedicamentosForm"
        component={MedicamentosFormScreen}
        options={{ title: "Novo Medicamento" }}
      />
    </Stack.Navigator>
  );
}
