import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

export const convertValue = async (inputName, have, want, amount) => {
  const options = {
    method: 'GET',
    url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    params: { have, want, amount },
    headers: {
      'X-RapidAPI-Key': REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return [response.data, inputName];
  } catch (error) {
    console.error(error);
  }
};
