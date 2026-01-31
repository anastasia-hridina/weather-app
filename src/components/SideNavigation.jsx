import umbrellaClearBg from '../images/umbrella-clear-bg.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { WiDayShowers } from 'react-icons/wi';
import { MdFormatListBulleted } from 'react-icons/md';
import { FaMap } from 'react-icons/fa6';


const navClass = "flex flex-col justify-center items-center gap-1 text-cyan-50 hover:text-cyan-700";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function SideNavigation() {

    return (
        <div className='bg-[#95c2e1] w-24 rounded-2xl max-[992px]:w-full max-[992px]:fixed max-[992px]:bottom-0 max-[992px]:left-0 max-[992px]:rounded-none max-[992px]:bg-[#B0CDE8] max-[992px]:z-10'>
            <nav className='mx-auto pt-6 max-[992px]:pt-1.5 max-[992px]:flex max-[992px]:justify-center max-[992px]:items-center max-[992px]:gap-20 max-[768px]:gap-16 max-[576px]:gap-12 max-[470px]:gap-8 max-[470px]:text-xs'>
                <Link to="/" className='max-[992px]:hidden'>
                    <img className='w-20 pb-10 rounded-full mx-auto' src={umbrellaClearBg} alt="Umbrella" />
                </Link>
                <ul className='flex flex-col gap-10 text-center max-[992px]:flex-row max-[992px]:gap-28 max-[992px]:items-center max-[768px]:gap-24 max-[576px]:gap-16 max-[470px]:gap-14'>
                    <li>
                        <NavLink to='/weather-forecast' className={getNavClasses}>
                            <WiDayShowers size={32} />
                            Weather
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/weather-cities' className={getNavClasses}>
                            <MdFormatListBulleted size={28} />
                            Cities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/weather-map' className={getNavClasses}>
                            <FaMap size={25} />
                            Map
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideNavigation;
