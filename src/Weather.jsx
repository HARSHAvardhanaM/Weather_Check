import { colors } from "@mui/material";
import "./Weather.css"
import Searchbox from "./SearchBox";
import Display from "./Display";
import { useState } from "react";

export default function Weather(){
let [data , setData] = useState(
    {
        city : "Delhi",
        feelslike: 22.96,
        humidity: 91,
        maxtemp: 22.8,
        mintemp: 21.39,
        temp: 22.3,
        weather: "mist"
    }
);

    let handleUpdate = (info)=>{
        setData(info)
    }

    return(
        <div className="weather">

            <Searchbox setinfo={handleUpdate} />
            <br />
            <Display info={data} />
        </div>
    )
}