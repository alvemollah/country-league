import React from 'react';
import { Link } from 'react-router-dom';
import "./CountryDetail.css";


const CountryDetail = (props) => {

    let { name, region, area, currencies} = props.country;

    return (
        <div className="country">
            
            <div>
                <img src={props.country.flag} alt=""/>
            </div>

            <div>
                <h3>Name : {name}</h3>
                <p>Regin : {region}</p>
                <p>Area : {area}</p>
                <p>Currency : {currencies[0].name}</p>
                <p><Link to={`/country/${name}`}>No.1 {name}</Link></p>
            </div>
            
        </div>
    );
};

export default CountryDetail;