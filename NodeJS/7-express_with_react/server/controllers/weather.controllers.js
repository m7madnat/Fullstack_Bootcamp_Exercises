import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "..", "client", "build");

export const getWeather = (req, res) => {
  const { location } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${req.params.location}&appid=c7655ed43d404d960e1709cac30f60be`
    )
    .then(({ data }) => {
      res.json({
        city: data.city.name,
        country: data.city.country,
        temp: (data.list[0].main.temp - 273.15).toFixed(1) + "°",
        description: data.list[0].weather[0].description,
      });
    })
    .catch((err) => {
      res.status(404).json({
        status: err.response.status,
        message: err.message,
      });
    });
};

