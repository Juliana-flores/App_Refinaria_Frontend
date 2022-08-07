import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginCadastro,
  Login,
  TelaInicial,
  Agendamentos,
  Carregamento,
  Fila,
} from "./views/Index";

import BootLoader from "./services/boot";
import { CookiesProvider } from 'react-cookie';

export default function App() {
  const services = BootLoader.load();
  const Stack = createStackNavigator();

  return (
    <CookiesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginCadastro"
            component={LoginCadastro}
            options={{
              title: "SmartQueue",
              headerStyle: { backgroundColor: "#53904E" },
              headerTintColor: "#121212",
              headerTitleStyle: {
                fontWeight: "bold",
                alignSelf: "center",
                fontSize: 22,
              },
            }}
          />
          <Stack.Screen
            name="Login"
            options={{headerShown:false}} component={Login}
          />
          {/*<Stack.Screen name="Cadastro" component={Cadastro} />*/}
          <Stack.Screen
            name="TelaInicial"
            component={TelaInicial}
            options={{
              title: "Início",
              headerStyle: { backgroundColor: "#53904E" },
              headerTintColor: "#121212",
              headerTitleStyle: {
                fontWeight: "bold",
                alignContent: "center",
                fontSize: 22,
              },
            }}
          />
          <Stack.Screen
            name="Agendamentos"
            component={Agendamentos}
            options={{
              title: "Agendamentos",
              headerStyle: { backgroundColor: "#53904E" },
              headerTintColor: "#121212",
              headerTitleStyle: {
                fontWeight: "bold",
                alignContent: "center",
                fontSize: 22,
              },
            }}
          />
          <Stack.Screen
            name="Fila"
            component={Fila}
            options={{
              title: "Fila",
              headerStyle: { backgroundColor: "#53904E" },
              headerTintColor: "#121212",
              headerTitleStyle: {
                fontWeight: "bold",
                alignContent: "center",
                fontSize: 22,
              },
            }}
          />
          <Stack.Screen
            name="Carregamento"
            component={Carregamento}
            options={{
              title: "Carregamento",
              headerStyle: { backgroundColor: "#53904E" },
              headerTintColor: "#121212",
              headerTitleStyle: {
                fontWeight: "bold",
                alignContent: "center",
                fontSize: 22,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>     
    </CookiesProvider>

  );
}
