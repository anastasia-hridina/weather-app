import { FaWind } from 'react-icons/fa';
import { FaThermometerHalf } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import { WiBarometer } from 'react-icons/wi';
import { WiSunrise } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import { formatToLocalTime } from '../../api/weatherApi';
import PropTypes from 'prop-types';

AirConditions.propTypes = {
    weather: PropTypes.object
};

function AirConditions({ weather: {
    wind_speed, feels_like, humidity, pressure, sunrise, sunset, timezone
} }) {
    return (
        <div className="bg-[#95c2e1] rounded-3xl p-7 mt-5 max-[576px]:p-2">
            <p className="text-cyan-100 uppercase font-semibold tracking-wide pl-1 text-sm max-[576px]:pt-5 max-[576px]:pl-6">Air Conditions</p>
            <div className="pt-5 grid grid-cols-2 grid-rows-3 items-center max-[400px]:text-center">
                <div className="p-6">
                    <div className='flex gap-1 max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center' >
                        <FaWind className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2 whitespace-nowrap">Wind</p>
                    </div>
                    <span className="font-bold text-xl text-white whitespace-nowrap">{`${wind_speed.toFixed()} km/h`}</span>
                </div>
                <div className="p-6">
                    <div className='flex max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center'>
                        <FaThermometerHalf className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2 whitespace-nowrap">Feels like</p>
                    </div>
                    <span className="font-bold text-xl text-white">{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className="p-6">
                    <div className='flex gap-1 max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center'>
                        <GiWaterDrop className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Humidity</p>
                    </div>
                    <span className="font-bold text-xl text-white">{`${humidity.toFixed()} %`}</span>
                </div>
                <div className="p-5">
                    <div className='flex max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center'>
                        <WiBarometer size={23} className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Pressure</p>
                    </div>
                    <span className="font-bold text-xl text-white whitespace-nowrap">{`${pressure.toFixed()} hPa`}</span>
                </div>
                <div className="p-6">
                    <div className='flex max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center'>
                        <WiSunrise size={25} className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Sunrise</p>
                    </div>
                    <span className="font-bold text-xl text-white whitespace-nowrap">{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
                </div>
                <div className="p-5">
                    <div className='flex max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center'>
                        <WiSunset size={25} className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Sunset</p>
                    </div>
                    <span className="font-bold text-xl text-white whitespace-nowrap">{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
                </div>
            </div>
        </div>
    );
}

export default AirConditions;
