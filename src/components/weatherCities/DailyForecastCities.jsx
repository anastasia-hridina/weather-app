import { iconUrlFromCode } from '../../api/weatherApi';
import PropTypes from 'prop-types';

DailyForecastCities.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};

function DailyForecastCities({ title, items }) {
    return (
        <div className='flex flex-col gap-6'>
            <p className='pb-1 text-neutral-400 uppercase font-bold text-sm tracking-wide'>{title}</p>
            {items.slice(0, 3).map((item) => {
                return (
                    <div key={item.title} className='flex justify-between items-center'>
                        <p className='text-neutral-400 text-sm'>{item.title}</p>
                        <div className='flex gap-4 items-center'>
                            <img className="w-10" src={iconUrlFromCode(item.icon)} alt="" />
                            <span className='font-bold'>{item.description}</span>
                        </div>
                        <span className='mr-10 font-bold'>{Math.ceil(item.temp.max)}°<span className='font-normal text-neutral-400'>/{Math.ceil(item.temp.min)}°</span></span>
                    </div>
                )
            })}
        </div>
    );
}

export default DailyForecastCities;
