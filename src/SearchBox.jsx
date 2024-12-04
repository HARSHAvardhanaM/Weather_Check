import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function Searchbox({setinfo}){

    let [city , setCity] = useState("");
    let [error , setError] = useState(false)
    let URL = "http://api.openweathermap.org/data/2.5/weather";
    let key = "5374fe6c1c5520c95ebb6636f7792635";

    let handleChange = (event)=>{
        setCity(event.target.value)
    }


    let getData = async ()=>{
        try{
            let data = await fetch(`${URL}?q=${city}&appid=${key}&units=metric`);
            let readData = await data.json();
            let precData = {
                city : city,
                temp : readData.main.temp,
                mintemp : readData.main.temp_min,
                maxtemp : readData.main.temp_max,
                feelslike : readData.main.feels_like,
                humidity : readData.main.humidity,
                weather : readData.weather[0].description
            }
            console.log(precData);
            return precData;
        }
        catch(err){
            throw(err);
        }
    }

    
    let handleSubmit = async (event)=>{
        try{event.preventDefault();
        setCity("");
        let info = await getData();
        setinfo(info);
        setError(false)}
        catch(err){
            setError(err)
        }
    }

    return(
        <div className='searchbox'>
            <h2 className='head'>Search for weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} value={city}  id="outlined-basic" label="City Name" variant="outlined" required />
                <br /><br />
                <Button type='submit' variant="contained" color="success">
                    Search
                </Button>
                {error && <p style={{color : "red"}}>No such place :(</p>}
            </form>
        </div>
    )
}