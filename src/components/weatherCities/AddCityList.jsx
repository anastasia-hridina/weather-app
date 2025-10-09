import { PropTypes } from 'prop-types';
import { formatToLocalTime, iconUrlFromCode } from '../../api/weatherApi';
import { TiDelete } from "react-icons/ti";


AddCityList.propTypes = {
    weather: PropTypes.object,
    removeHandle: PropTypes.func,
}

function AddCityList({ weather: { name, country, icon, temp, dt, timezone }, removeHandle }) {

    return (
        <ul>
            <li className="relative flex items-center gap-10 mt-5 p-7 bg-[#95c2e1] rounded-3xl">
                <img className='w-20 max-[576px]:hidden' src={iconUrlFromCode(icon)} alt="Icon" />
                <div>
                    <h3 className='text-3xl font-bold tracking-wide text-white mb-1'>{`${name}, ${country}`}</h3>
                    <span className='text-cyan-100 font-medium text-lg'>{formatToLocalTime(dt, timezone)}</span>
                </div>
                <span className='ml-auto mb-auto text-cyan-100 text-4xl active:text-gray-400'>{Math.ceil(temp)}°</span>
                <button onClick={() => { removeHandle(name); }} className='absolute top-1 right-1'><TiDelete size={33} className='opacity-0 hover:opacity-100 fill-sky-100 max-[992px]:opacity-100' /></button>
            </li>
        </ul>
    );
}

export default AddCityList;
