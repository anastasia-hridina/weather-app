import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';


const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                lazy: () => import('./layout/WeatherStart.jsx')
            },
            {
                path: 'weather-forecast',
                lazy: () => import('./layout/WeatherMain.jsx')
            },
            {
                path: 'weather-cities',
                lazy: () => import('./layout/WeatherCities.jsx')
            },
            {
                path: 'weather-map',
                lazy: () => import('./layout/WeatherMap.jsx')
            }
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
