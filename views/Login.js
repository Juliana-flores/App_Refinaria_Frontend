import React, { useState } from "react";

import BootLoader from "../services/boot";
import {
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { css } from "../assets/CSS/Css";
import { useCookies,withCookies } from 'react-cookie';
const { smartQueueService } = BootLoader.load();

function Login({ navigation }) {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");
  const [cookies, setCookie] = useCookies(['profile']);

  const handleLogin = async () => {
    const response = await smartQueueService.login({ username, password });


    if (!response) {
      alert("Usuário ou senha incorretos");
      return;
    }
    setCookie('profile', response, { path: '/'});

    navigation.navigate("TelaInicial");
  };

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
          placeholder="Usuário:"
          name="username"
          onChangeText={(newText) => setUsername(newText)}
        ></TextInput>
        <TextInput
          style={css.login__input}
          placeholder="Senha:"
          secureTextEntry={true}
          name="password"
          onChangeText={(newText) => setPassword(newText)}
        ></TextInput>
        

        <TouchableOpacity style={css.login__button} onPress={handleLogin}>
          <Text style={css.login_buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default withCookies(Login);