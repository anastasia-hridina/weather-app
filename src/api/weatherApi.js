import { DateTime } from "luxon";

const TOKEN = import.meta.env.VITE_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/';

const getWeatherData = (infoType, searchParams, version = "2.5") => {
    const url = new URL(`${BASE_URL}/${version}/${infoType}`);
    url.search = new URLSearchParams({ ...searchParams, appid: TOKEN });

    return fetch(url)
        .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data;


    const { main, description, icon } = weather[0];

    return {
        lat, lon, temp, feels_like, temp_min, temp_max, humidity, pressure,
        name, dt, country, sunrise, sunset, main, description, icon, wind_speed: speed
    };
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 8).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp,
            description: d.weather[0].description,
            icon: d.weather[0].icon
        };
    });

    hourly = hourly.slice(1, 8).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        };
    });

    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
    const currentWeather = await getWeatherData(
        "weather",
        searchParams,
        "2.5"
    ).then(formatCurrentWeather);

    const { lat, lon } = currentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: 'minutely, alerts',
        units: searchParams.units,
    },
        "3.0"
    ).then(formatForecastWeather);

    return { ...currentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
    secs,
    zone,
    format = 'hh:mm a'
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
