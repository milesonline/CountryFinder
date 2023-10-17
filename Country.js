import React from 'react';

const Country = ({ name, capital, population, flag}) => {
    return(
        <div className="country-card">
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <img src={flag} alt={`Flag of ${name}`} className="country-flag" />
        </div>
    );
};

export default Country;