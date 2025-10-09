import { useState, useEffect } from "react";

const weatherLocalStorageKey = 'weather';

export default function useAddCity() {
    const [query, setQuery] = useState({ q: 'Kyiv' });
    const [addCityItem, setAddCityItem] = useState(() => {
        return JSON
            .parse(
                window
                    .localStorage.getItem(weatherLocalStorageKey)
            ) || [];
    });


    function addCity(newCity) {
        if (!addCityItem.find((city) => city.name === newCity.name)) {
            setAddCityItem([
                newCity,
                ...addCityItem,
            ]);
        }
    }


    const removeCity = (cityName) => {
        const updatedCities = addCityItem.filter(city => city.name !== cityName);
        setAddCityItem(updatedCities);
    };


    useEffect(() => {
        window.localStorage.setItem(weatherLocalStorageKey, JSON.stringify(addCityItem))
    }, [addCityItem]);


    return [query, setQuery, addCity, addCityItem, removeCity]
}
