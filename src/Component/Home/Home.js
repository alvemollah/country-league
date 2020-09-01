import React, { useEffect } from 'react';
import { useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';

const Home = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    }, [])

    
    return (
        <div>
            {
                country.map(coun => <CountryDetail key={coun.alpha2Code} country={coun}></CountryDetail>)
            }
        </div>
    );
};

export default Home;