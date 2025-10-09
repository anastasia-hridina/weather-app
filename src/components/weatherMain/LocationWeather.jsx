import { iconUrlFromCode } from "../../api/weatherApi";
import PropTypes from 'prop-types';

LocationWeather.propTypes = {
    weather: PropTypes.object
};

function LocationWeather({ weather: { name, country, description, icon, temp } }) {

    return (
        <div className="pt-16 pl-10 flex justify-between pb-20 max-[576px]:flex-col max-[576px]:items-center max-[576px]:text-center max-[576px]:pl-0 max-[576px]:pb-10">
            <div className="max-[576px]:pb-6">
                <h3 className="text-5xl font-bold tracking-wide">{`${name}, ${country}`}</h3>
                <p className="pt-4 pb-20 text-lg text-gray-400 tracking-wide max-[576px]:pb-10">{description}</p>
                <span className="text-7xl font-bold">{`${Math.ceil(temp)}°`}</span>
            </div>
            <div>
                <img className="w-32" src={iconUrlFromCode(icon)} alt="Weather Icon" />
            </div>
        </div>
    );
}

export default LocationWeather;
