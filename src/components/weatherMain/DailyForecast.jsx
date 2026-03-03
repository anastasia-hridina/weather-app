import PropTypes from 'prop-types';
import { iconUrlFromCode } from '../../api/weatherApi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { colors } from '@mui/material';

DailyForecast.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};

const style = {
    py: 0,
    width: '100%',
};

function DailyForecast({ title, items }) {
    return (
        <div className=' bg-[#95c2e1] h-full rounded-3xl p-6 max-[1080px]:p-4 max-[992px]:p-8'>
            <h2 className='text-cyan-100 uppercase font-semibold tracking-wide pl-1 text-sm'>{title}</h2>
            <List sx={style}>
                {items.map((item, index) => {
                    return (
                        <ListItem key={item.title} disablePadding className='w-full flex flex-col'>
                            <div className='w-full flex justify-between items-center gap-12 mt-4 max-[366px]:flex-col max-[366px]:gap-2'>
                                <p className='text-cyan-50 tracking-wide text-sm'>{item.title}</p>
                                <div className='flex items-center gap-4 max-[1080px]:flex max-[1080px]:flex-col max-[1080px]:gap-0 max-[1080px]:justify-center max-[992px]:flex-row max-[470px]:flex-col'>
                                    <img className='w-12' src={iconUrlFromCode(item.icon)} alt="" />
                                    <span className='font-bold text-white text-sm tracking-wide whitespace-nowrap max-[400px]:text-xs'>{item.description}</span>
                                </div>
                                <span className='font-bold text-white text-sm tracking-wide whitespace-nowrap'>{Math.ceil(item.temp.max)} <span className='text-white font-normal tracking-wide whitespace-nowrap'>/ {Math.ceil(item.temp.min)}</span></span>
                            </div>
                            {index < items.length - 1 &&
                                (
                                    <div className="w-full h-px bg-white/25 mt-4" />
                                )
                            }
                        </ListItem>
                    )
                })}
            </List>
        </div >
    );
}

export default DailyForecast;
