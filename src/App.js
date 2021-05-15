import React, { useState, useEffect } from 'react';
import { FaThermometerHalf } from 'react-icons/fa';
import { BsFillDropletFill } from "react-icons/bs";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import sky from './img/sky.jpg';
import './App.css';

function App() {
    const [temp, setTemp] = useState('');
    const[hum, setHum] = useState('');

    useEffect(() => {
        fetchWeather();
    }, []);

    const fetchWeather = () => {
        fetch('https://dweet.io/get/latest/dweet/for/minnan-weather')
        .then(response => response.json())
        .then(data => {
            setTemp(data.with[0].content.temp);
            setHum(data.with[0].content.hum);
        })
        .catch(err => console.error(err));
    }
    
  return (
    <div className="App">
      <div style={{ 
      backgroundImage: `url(${sky})`, height: '100vh', width: '100vw', alignContent: 'center' 
    }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card style={{width: '50%', textAlign: 'center'}}>
          <CardContent>
            <h1 className="header">Minna's Weather</h1>
            <div className="values"><FaThermometerHalf /> Temperature {temp} °C</div>
            <div className="values"><BsFillDropletFill /> Humidity {hum} %</div>
          </CardContent>
        </Card>
      </Box>

        
      </div>
      
    </div>
  );
}

export default App;
