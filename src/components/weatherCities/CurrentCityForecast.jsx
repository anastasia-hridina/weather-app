import { iconUrlFromCode } from '../../api/weatherApi';
import PropTypes from 'prop-types';

CurrentCityForecast.propTypes = {
    weather: PropTypes.object
};

function CurrentCityForecast({ weather: { name, country, description, icon, temp } }) {
    return (
        <div>
            <div className='flex justify-center items-center gap-32'>
                <div>
                    <h3 className='text-4xl font-bold tracking-wide'>{`${name}, ${country} `}</h3>
                    <p className='pb-5 pt-1 text-neutral-400 text-sm tracking-wide'>{description}</p>
                    <span className='text-6xl font-bold'>{Math.ceil(temp)}°</span>
                </div>
                <img className='w-28' src={iconUrlFromCode(icon)} alt="" />
            </div>
            <div className='my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-20 dark:opacity-100'></div>


        </div>

    );
}

export default CurrentCityForecast;
