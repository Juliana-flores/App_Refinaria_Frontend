import axios from "axios";
import md5 from "md5";

class SmartQueueService {
  /**
   *
   * @param {object} param0
   * @param {object} param0.apiParams
   * @param {string} param0.apiParams.host
   */
  constructor({ apiParams }) {
    const { host } = apiParams;
    this.baseURL = host;

    this.request = axios.create({
      baseURL: this.baseURL,
    });
  }

  async login({ username, password }) {
    try {
      const { data } = await this.request.post("/user/login", {
        username,
        password: md5(password),
      });
      return data;
    } catch (error) {
      return null;
    }
  }

  async schedule({ lat, lon, plateCarriage, id }) {
    try {
      const { data } = await this.request.post("/queue/schedule", {
        lat,
        lon,
        plateCarriage,
        id,
      });

      return data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw new Error(
        "Problema ao realizar agendamento. Favor contatar o administrador do sistema."
      );
    }
  }
}

export default SmartQueueService;
