import { nalssiLoading, nalssiSuccess } from '../action';
import { sleep } from './sleep';
import Axios from 'axios';

export const nalUtilsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(nalssiLoading());
      await sleep(777);

      const response = await Axios.get(
        'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=bd8c36da2c4510a870343fdbd5739b54',
      );

      const nalData = response.data;
      const celsius = Math.floor(nalData.main.temp - 273.15);
      const nalName = nalData.weather[0].main;
      dispatch(nalssiSuccess(celsius, nalName));
    } catch {}
  };
};
