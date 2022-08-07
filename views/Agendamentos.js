import React, { useState, useEffect } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { css } from "../assets/CSS/Css";
import * as Location from "expo-location";

import { useCookies, withCookies } from "react-cookie";

import BootLoader from "../services/boot";

const { smartQueueService } = BootLoader.load();

function Agendamento({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [cookies, setCookies] = useCookies(["profile"]);

  const handleSchedule = async () => {
    const {
      user,
      trucks: [truck],
    } = cookies.profile;

    const { latitude: lat, longitude: lon } = location;
    const { plateCarriage } = truck;
    const { id } = user;

    try {
      const schedule = await smartQueueService.schedule({
        lat,
        lon,
        plateCarriage,
        id,
      });
      navigation.navigate("Carregamento", { schedule });
    } catch (error) {
      navigation.navigate("Carregamento", { error: error.message });
    }
  };

  const agendamentoView = (user, truck) => (
    <View style={css.container3}>
      <View>
        <Text style={css.texto_inicial}>INFORMAÇÕES</Text>
        <Text style={css.texto_agendamentos}>Motorista:</Text>
        <TextInput
          style={css.texto_agendamentos}
          editable={false}
          value={user.name}
        ></TextInput>
        <Text style={css.texto_agendamentos}>Placa:</Text>
        <TextInput
          style={css.texto_agendamentos}
          editable={false}
          value={truck.plateCarriage}
        ></TextInput>
        <Text style={css.texto_agendamentos}>Compartimentos:</Text>
        <TextInput
          style={css.texto_agendamentos}
          editable={false}
          value={truck.numberOfCompartments.toString()}
        ></TextInput>

        <TouchableOpacity style={css.carregar__button} onPress={handleSchedule}>
          <Text style={css.carregar__buttonText}>ENTRAR NA FILA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const errorView = (errorMessage) => (
    <View style={css.container3}>
      <View>
        <Text style={css.texto_inicial}>{errorMessage}</Text>
      </View>
    </View>
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(
          "Permissão para localização negada. Não é possível prosseguir."
        );
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, []);

  if (errorMsg) {
    return errorView(errorMsg);
  }

  const {
    user,
    trucks: [truck],
  } = cookies.profile;
  return agendamentoView(user, truck);
}

export default withCookies(Agendamento);
