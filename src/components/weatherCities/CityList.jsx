import { PropTypes } from 'prop-types';

CityList.propTypes = {
    children: PropTypes.node
}

function CityList({ children }) {
    return (
        <div className='mt-10'>
            {children}
        </div>
    );
}

export default CityList;
