import { useState, useEffect } from "react";
import Search from "../components/Search";
import SideNavigation from "../components/SideNavigation";
import CityList from "../components/weatherCities/CityList";
import CurrentCityForecast from "../components/weatherCities/CurrentCityForecast";
import getFormattedWeatherData from "../api/weatherApi";
import TodaysForecastCities from "../components/weatherCities/TodaysForecastCities";
import DailyForecastCities from "../components/weatherCities/DailyForecastCities";
import AddCityList from "../components/weatherCities/addCityList";
import useAddCity from "../components/hooks/addCity/useAddCity";
import Cookies from "js-cookie";


function WeatherCities() {
    const [query, setQuery, addCity, addCityItem, removeCity] = useAddCity();
    const [units, setUnits] = useState({ units: 'metric' });
    const [weather, setWeather] = useState();


    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, ...units })
                .then((data) => {
                    setWeather(data);
                });
        };

        fetchWeather();

    }, [query, units]);


    useEffect(() => {
        if (weather) {
            addCity(weather)
        }
    }, [weather]);


    const handleOnSearchChange = (searchData) => {
        setQuery({ q: searchData.label })
    };


    const cookieName = 'citiescookies'

    useEffect(() => {
        Cookies.set(cookieName, 'weatheracrosscities', { expires: 1 });
    }, []);


    return (

        <section className="flex gap-5 max-w-[1400px] mx-auto p-3 max-[992px]:w-full max-[992px]:mb-16">
            <SideNavigation />

            <div className="w-[55%] h-full max-[992px]:w-full">
                <Search onSearchChange={handleOnSearchChange} />

                {
                    weather &&
                    (
                        <CityList>
                            {
                                addCityItem.length ?
                                    addCityItem.map(
                                        (addCity) => <AddCityList
                                            weather={addCity}
                                            key={addCity.name}
                                            removeHandle={removeCity}
                                        />
                                    ) :
                                    <p className="text-center text-xl tracking-wider uppercase font-bold text-slate-400">No cities added</p>
                            }
                        </CityList>
                    )
                }

            </div>

            <div className="w-[30%] ml-8 h-full max-[992px]:hidden">
                {
                    weather &&
                    (
                        <div>
                            <CurrentCityForecast weather={weather} />
                            <TodaysForecastCities items={weather.hourly} title="Today's Forecast" />
                            <DailyForecastCities items={weather.daily} title="3-Day Forecast" />
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export { WeatherCities as Component };

export default WeatherCities;
