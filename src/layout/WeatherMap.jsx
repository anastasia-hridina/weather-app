import Search from "../components/Search";
import SideNavigation from "../components/SideNavigation";
import ForecastMap from "../components/weatherMap/forecastMap";


function WeatherMap() {

    return (
        <section className="flex gap-2 max-w-[1400px] mt-1 ml-3">
            <SideNavigation />
            <ForecastMap />
        </section>
    );
}

export { WeatherMap as Component };

export default WeatherMap;
