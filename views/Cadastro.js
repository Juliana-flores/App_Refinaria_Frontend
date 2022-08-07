import React, { useState, useEffect } from "react";
import {
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { css } from "../assets/CSS/Css";

export default function Cadastro({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={css.container}
    >
      <View style={css.login__icon}>
        <Image
          style={css.img_login}
          source={require("../assets/img/icon-refinaria.png")}
        />
      </View>

      <View style={css.login__form}>
        <TextInput
          style={css.login__input}
          placeholder="Nome Completo:"
        ></TextInput>

        <TextInput style={css.login__input} placeholder="CPF:"></TextInput>

        <TextInput style={css.login__input} placeholder="Usuário:"></TextInput>

        <TextInput
          style={css.login__input}
          placeholder="Senha:"
          secureTextEntry={true}
        ></TextInput>

        <TouchableOpacity
          style={css.login__button}
          onPress={() => navigation.navigate("Telainicial")}
        >
          <Text style={css.login__buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
