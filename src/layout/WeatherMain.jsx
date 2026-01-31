import getFormattedWeatherData from "../api/weatherApi";
import DailyForecast from "../components/weatherMain/DailyForecast";
import SideNavigation from "../components/SideNavigation";
import AirConditions from "../components/weatherMain/AirConditions";
import { useEffect, useState } from "react";
import TodaysWeather from "../components/weatherMain/TodaysWeather";
import LocationWeather from "../components/weatherMain/LocationWeather";
import Search from "../components/Search";

function WeatherMain() {
    const [query, setQuery] = useState({ q: "Kyiv" });
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

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    useEffect(() => {
        handleLocationClick()
    }, []);

    const handleOnSearchChange = (searchData) => {
        setQuery({ q: searchData.label });
    }

    return (
        <section className="flex justify-center gap-5 max-w-[1400px] mx-auto p-5 ml-5 mr-5 max-[992px]:flex-col max-[992px]:mb-20 max-[992px]:px-0">
            <SideNavigation />

            <div className=" w-[55%] h-full max-[992px]:w-full">

                <Search onSearchChange={handleOnSearchChange} />

                {
                    weather && (
                        <div>
                            <LocationWeather weather={weather} />
                            <TodaysWeather title="Today's Forecast" items={weather.hourly} />
                            <AirConditions weather={weather} />
                        </div>
                    )
                }
            </div>

            {
                weather && (
                    <div className="w-[40%] max-[992px]:w-full">
                        <DailyForecast title="7-Day Forecast" items={weather.daily} />
                    </div>
                )
            }
        </section>
    );
};






export { WeatherMain as Component };

export default WeatherMain;
