import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Covidinfo from './Components/Covidinfo/Covidinfo';
import Country from './Components/Country/Country';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Nav/Nav';

function App() {
  const url = "https://api.covid19api.com/summary";
  const url2 = "https://api.covid19api.com/summary";

  const [countries, setCountries] = useState([]);
  const [covidData, setCovidData] = useState({});

  useEffect(() => {
     fetch(url)
     .then(result => result.json())
     .then(data => {
        setCovidData(data.Global)
        setCountries(data.Countries)
        console.log(data)
    });
  },[])
 
 const infoFunction = (data) =>{
   setCovidData(data);
  // setCovidData(data);
 }

  return (
    <div className="App">   
    <Nav></Nav>
      <header className="App-header ">
        
     <div className="container">
        <Covidinfo info={covidData} ></Covidinfo>

        <hr/>
        <small style={{ color: 'greenyellow'}}>Select your country</small>
        <hr/>


        <div className="countries-div">
          
          {
            countries.map(cont => <Country func={infoFunction} data={cont}></Country>)

          }
      </div>



     </div>
      
      </header>
    </div>
  );
}

export default App;
