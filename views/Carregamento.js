/**
 * @typedef {object} Schedule
 * @property {string} id
 * @property {string} plateCarriage
 * @property {number} position
 * @property {string} driverCode
 * @property {string} status
 * @property {string} product
 * @property {Date} eventAt
 */
import React from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { format, parseISO } from "date-fns";
import { css } from "../assets/CSS/Css";

export default function Carregamento({ route, navigation }) {
  /** @type {{schedule: Schedule; error: string;}} */
  const { schedule, error } = route.params;

  const errorView = (message) => (
    <View style={css.container3}>
      <View>
        <Text style={css.texto_inicial}>{message}</Text>
      </View>
    </View>
  );

  const carregamentoView = (schedule) => {
    const timestamp = parseISO(schedule.eventAt);
    const eventAt = format(timestamp, "dd/MM/yyyy");

    return (
      <View style={css.container3}>
        <View>
          <Text style={css.texto_agendamentos}>SEU CÓDIGO NA FILA É:</Text>
          <TextInput
            style={css.texto_agendamentos}
            value={schedule.position.toString()}
          ></TextInput>

          <Text style={css.texto_agendamentos}>DATA DE CARREGAMENTO:</Text>
          <TextInput style={css.texto_agendamentos} value={eventAt}></TextInput>

          <Text style={css.texto_agendamentos}>STATUS DO CARREGAMENTO:</Text>
          <TextInput
            style={css.texto_agendamentos}
            value={schedule.status.toString()}
          ></TextInput>

          <Text style={css.texto_agendamentos}>PRODUTO PARA CARREGAMENTO:</Text>
          <TextInput
            style={css.texto_agendamentos}
            value={schedule.product.toString()}
          ></TextInput>

          <TouchableOpacity
            style={css.novo__button}
            onPress={() => navigation.navigate("TelaInicial")}
          >
            <Text style={css.novo__buttonText}>VOLTAR PARA O INÍCIO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  console.log(schedule);
  if (error) {
    return errorView(error);
  }

  return carregamentoView(schedule);
}
