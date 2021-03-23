import React from 'react';
import './Covidinfo.css'

const Covidinfo = (props) => {
    console.log(props.info)
    const {Country, Date, NewConfirmed, NewDeaths, NewRecovered, 
        TotalConfirmed, TotalDeaths, TotalRecovered } = props.info;

  



    return (
        <div className="covidinfo-div">
            <h4>Date : {Date}</h4>
          <h1>{Country ? Country : "Global"} Covid-19 Update</h1>

         <div className="d-flex">
            <div>
                <p> New Confirmed : {NewConfirmed}</p>
                <p> New Deaths : {NewDeaths}</p>
                <p> New Recovred : {NewRecovered}</p>
            </div>
                <br/>
                <div>
                    <p> Total Confirmed : {TotalConfirmed}</p>
                    <p> Total Death : {TotalDeaths}</p>
                    <p> Total Recovered : {TotalRecovered}</p>
                </div>
            </div>
           
        </div>
    );
};

export default Covidinfo;