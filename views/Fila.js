import React from "react";
import { TextInput, Text, View, Image, TouchableOpacity } from "react-native";
import { css } from "../assets/CSS/Css";

export default function Fila({ navigation }) {
  return (
    <View style={css.container}>
      <Image
        style={css.icon_refinaria}
        source={require("../assets/img/icon-refinaria.png")}
      />

      <View style={css.container}>
        <TouchableOpacity
          style={css.fila__button}
          onPress={() => navigation.navigate("Carregamento")}
        >
          <Text style={css.fila__buttonText}>Posição na fila</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
