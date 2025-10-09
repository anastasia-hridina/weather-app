const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const geodbKey = import.meta.env.VITE_APP_GEODB_KEY;

const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': geodbKey,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};


export { geoApiOptions, url };
