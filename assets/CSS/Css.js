import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container3: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button__home: {
    marginVertical: 60,
  },
  darkbg: {
    backgroundColor: "#ffff",
  },
  login__icon: {
    marginBottom: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  login__msg: (text = "none") => ({
    fontWeight: "bold",
    fontSize: 24,
    color: "#CA2620",
    marginTop: 10,
    marginBottom: 15,
    display: text,
  }),
  login__form: {
    alignSelf: "center",
    width: "80%",
  },
  login__input: {
    backgroundColor: "#A9AEB3",
    fontSize: 22,
    padding: 20,
    marginBottom: 30,
    borderRadius: 8,
  },

  text__lembrete: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#121212",
    marginBottom: "5%",
  },

  texto_inicial: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#121212",
    alignSelf: "center",
    marginVertical: 20,
  },

  texto_agendamentos: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#121212",
    alignSelf: "auto",
    marginBottom: 10,
    marginVertical: 5,
  },

  img: {
    marginVertical: 40,
    padding: 100,
  },

  img_login: {
    padding: 100,
    marginTop: 10,
  },

  icon_refinaria: {
    padding: 100,
    marginTop: 80,
  },

  login_button: {
    padding: 20,
    width: "50%",
    backgroundColor: "#53904E",
    alignSelf: "center",
    borderRadius: 8,
  },
  cadastro_button: {
    padding: 20,
    width: "50%",
    marginVertical: 40,
    backgroundColor: "#121212",
    alignSelf: "center",
    borderRadius: 8,
  },
  login__button: {
    padding: 15,
    backgroundColor: "#53904E",
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 30,
    width: "60%",
  },
  login_buttonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#121212",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  cadastro_buttonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#D9E0E6",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  yes__button: {
    padding: 15,
    backgroundColor: "#53904E",
    alignSelf: "center",
    borderRadius: 8,
    width: "100%",
    marginVertical: 10,
    marginBottom: "10%",
  },

  yes__buttonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#121212",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  no__button: {
    padding: 15,
    backgroundColor: "#121212",
    alignSelf: "center",
    borderRadius: 8,
    width: "100%",
  },

  no__buttonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#D9E0E6",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  carregar__button: {
    padding: 15,
    backgroundColor: "#53904E",
    alignSelf: "center",
    borderRadius: 8,
    width: "100%",
    marginVertical: 5,
    marginBottom: 5,
  },

  carregar__buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#121212",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  novo__button: {
    padding: 15,
    backgroundColor: "#484B4D",
    alignSelf: "center",
    borderRadius: 8,
    width: "100%",
    marginVertical: 5,
  },

  novo__buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D9E0E6",
    textTransform: "uppercase",
    alignSelf: "center",
  },

  fila__button: {
    padding: 30,
    backgroundColor: "#53904E",
    alignSelf: "center",
    borderRadius: 8,
    width: "100%",
    marginBottom: 80,
  },

  fila__buttonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#121212",
    textTransform: "uppercase",
    alignSelf: "center",
  },
});

export { css };
