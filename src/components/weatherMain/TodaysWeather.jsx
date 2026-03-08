import { iconUrlFromCode } from "../../api/weatherApi";
import PropTypes from 'prop-types';

TodaysWeather.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};

function TodaysWeather({ title, items }) {
    return (
        <div className="bg-[#95c2e1] rounded-3xl p-6 max-[1024px]:p-4">
            <p className="text-cyan-100 uppercase font-semibold tracking-wide pl-1 text-sm">{title}</p>
            <ul className="pt-5 flex gap-7 justify-center overflow-auto -mb-3 pb-3">
                {items.map((item) => {
                    return (
                        <li key={item.title} className="flex flex-col gap-4">
                            <p className="text-white text-center whitespace-nowrap font-semibold tracking-wide text-sm">{item.title}</p>
                            <img className="w-12 mx-auto" src={iconUrlFromCode(item.icon)} alt="" />
                            <p className="font-bold text-white text-center text-lg">{`${Math.ceil(item.temp)}°`}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TodaysWeather;
