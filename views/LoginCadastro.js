import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { css } from "../assets/CSS/Css";

export default function Logincadastro({ navigation }) {
  return (
    <View style={css.container2}>
      <Image
        style={css.img}
        source={require("../assets/img/icon-refinaria.png")}
      />
      <TouchableOpacity
        style={css.login_button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={css.login_buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      {/*<TouchableOpacity
        style={css.cadastro_button}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={css.cadastro_buttonText}>CADASTRAR</Text>
      </TouchableOpacity>*/}
    </View>
  );
}
