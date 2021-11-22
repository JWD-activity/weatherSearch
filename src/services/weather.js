const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherData = async (postcode) => {
  try {
    const response = await fetch(
      `${API_URL}?zip=${postcode},AU&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
