import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./Display.css"


export default function Display({info}){

    let cold_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4Cz7vLneUDo9NYOpxBT3PmFfGONxFSRj_g&s"
    let hot_url = "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600"
    let rainy_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoF9f8Y4lwQeOnLijmMajma9CtCkOEs7MgSA&s"

    // info = {
    //     city : "Delhi",
    //     feelslike: 22.96,
    //     humidity: 91,
    //     maxtemp: 22.8,
    //     mintemp: 21.39,
    //     temp: 22.3,
    //     weather: "mist"
    // }


    return(
        <div className='display'>
        <div >
            <h2 style={{ color : "black", textAlign : "center"}}>Weather - {info.weather}
                {info.humidity > 85 ? <ThunderstormIcon /> : info.temp >23 ? <WbSunnyIcon /> : <AcUnitIcon />}
            </h2>
            <br /><br />
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={info.humidity > 85 ? rainy_url : info.temp >23 ? hot_url : cold_url}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{info.humidity > 85 ? <ThunderstormIcon /> : info.temp >23 ? <WbSunnyIcon /> : <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temperature : {info.temp}&deg;C</div>
                        <div>Humidity : {info.humidity}</div>
                        <div>Min Temperature : {info.mintemp}&deg;C</div>
                        <div>Max Temperature : {info.maxtemp}&deg;C</div>
                        <div>The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</div>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                
                </Card>
        </div>
        </div>
    )
}