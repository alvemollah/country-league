import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryId} = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/country/${countryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

    const {flag, name, region} = country;

    return (
        <div>
            
            <h2>any thing you want : {countryId}</h2>
            <div>
            <img src={flag} alt=""/>
            </div>

            <div>
                <h1>Name: {name}</h1>
                <h4>{region}</h4>
            </div>

        </div>
    );
};

export default Country;