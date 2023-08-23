import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
  baseURL: "https://0581-182-72-21-218.ngrok-free.app",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    // console.log(token);
    if (token){
      config.headers.Authorization = `Bearer ${token}`;
      // console.log("Pass");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
