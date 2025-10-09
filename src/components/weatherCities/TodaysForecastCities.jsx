import { iconUrlFromCode } from '../../api/weatherApi';
import PropTypes from 'prop-types';

TodaysForecastCities.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

function TodaysForecastCities({ title, items }) {

    return (
        <div>
            <p className='text-sm uppercase font-bold text-neutral-400 tracking-wide pb-4'>{title}</p>
            <div className='flex justify-center gap-10 overflow-auto -mb-3 pb-3'>
                {items.slice(0, 4).map((item) => {
                    return (
                        <div key={item.title} className='flex flex-col gap-4 items-center'>
                            <p className='text-neutral-400 font-bold text-sm whitespace-nowrap'>{item.title}</p>
                            <img className='w-10 mx-auto' src={iconUrlFromCode(item.icon)} alt="" />
                            <span className='font-bold text-lg text-center'>{Math.ceil(item.temp)}°</span>
                        </div>
                    )
                })}
            </div>
            <div className='my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-20 dark:opacity-100'></div>
        </div>
    );
}

export default TodaysForecastCities;
