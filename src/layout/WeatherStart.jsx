import umbrellaImage from '../images/umbrella.jpeg';
import { NavLink } from 'react-router-dom';

function WeatherStart() {

    return (
        <section className="p-7 h-full flex justify-between max-[992px]:absolute max-[992px]:left-1/2 max-[992px]:transform max-[992px]:-translate-x-1/2">
            <img className='rounded-3xl w-full h-auto max-w-[700px] max-[1200px]:w-[50%] max-[992px]:hidden' src={umbrellaImage} alt="Umbrella" />
            <div className='text-center pb-8 flex flex-col justify-center mx-auto'>
                <img className='rounded-2xl w-16 mx-auto mb-6 max-[992px]:w-40' src={umbrellaImage} alt="Umbrella" />
                <h1 className='text-5xl font-bold pb-2 tracking-wide max-[992px]:pt-16 max-[992px]:text-6xl'>Breeze</h1>
                <p className='text-gray-400 tracking-wide max-[992px]:text-3xl'>Weather App</p>
                <div className='pt-9 max-[992px]:pt-24'>
                    <NavLink to='/weather-forecast' className="rounded-3xl text-white font-semibold tracking-wider bg-blue-400 py-4 px-9 whitespace-nowrap transition-all hover:ease-in-out hover:bg-blue-500 duration-700 max-[992px]:px-10 max-[992px]:py-5 max-[992px]:text-xl">
                        Get started
                    </NavLink>
                </div>

            </div>
        </section>
    );
}

export { WeatherStart as Component };

export default WeatherStart;
