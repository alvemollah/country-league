import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Country.css";
const Country = () => {
    const {countryId} = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])

    const {flag, name, region} = country;
    console.log(country)
    
    return (
        <div  className="container">
            <div  className="img-container">
            <img src={flag} alt=""/>
            </div>

            <div>
                <h1>Name: {name}</h1>
                 <h4>Region : {region}</h4>
            </div>

        </div>
    );
};

export default Country;