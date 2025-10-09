import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadowUrl,
    shadowSize: [41, 41],
});

const apiKey = import.meta.env.VITE_APP_API_KEY;
const position = [50.450, 30.523];
const tileLayerUrl = `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`;

const ForecastMap = () => {
    return (
        <div className='map-container z-0 w-full p-4 pt-2'>
            <h2 className='text-3xl font-bold pb-3 text-[#76AED5]'>Global Weather Map</h2>
            <MapContainer id='map' center={position} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <TileLayer url={tileLayerUrl} />
                <Marker position={position} icon={customIcon}>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default ForecastMap;
