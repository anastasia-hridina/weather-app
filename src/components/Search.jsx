import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, url } from "../api/searchApi";

function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            return fetch
                (
                    `${url}/?minPopulation=1000000&namePrefix=${inputValue}`,
                    geoApiOptions
                )
                .then((response) => response.json())
                .then((response) => {
                    return {
                        options: response.data.map((city) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`,
                            };
                        }),
                    };
                })
        }
        catch (error) {
            console.error(error);
        };
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '15px',
            border: '2px solid #ccc',
            width: '100%',
            boxShadow: state.isFocused ? '0 0 0 1px #95c2e1' : null,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: '#95c2e1',
            color: state.isFocused ? 'white' : null,
        }),
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            styles={customStyles}
        />
    );
}

export default Search;
