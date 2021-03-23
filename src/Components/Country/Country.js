import React from 'react';
import "./Country.css"


const Country = (props) => {
    const data = props.data;
    const func = props.func;
    return (
        <div className="country-div">
            <button className="btn btn-warning" onClick={() => func(data)} >{props.data.Country}</button>
        </div>
    );
};

export default Country;