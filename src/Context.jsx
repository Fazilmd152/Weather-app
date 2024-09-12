import axios from 'axios'
import React, { createContext, useState } from 'react'


const WeatherContext = createContext()

const Context = (data) => {

    const [city, setCity] = useState()
    const [weather, setWeather] = useState("Enter your City")
    const [desc, setDesc] = useState()
    const [temp, setTemp] = useState(0)
    const [wind, setWind] = useState()
    const [humidity, setHumidity] = useState()
    const [icon, setIcon] = useState()
    const [True, setTrue] = useState(false)

    const weatherData = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7035381880b1d026a8abbff3b4d167d`)



    weatherData.then((d) => {
        setIcon(d.data.weather[0].icon)
        
        setWeather(d.data.weather[0].main)
        setDesc(d.data.weather[0].description)
        setTemp(d.data.main.temp)
        setWind(d.data.wind.speed)
        setHumidity(d.data.main.humidity)
        setTrue(true)
      

    }).catch(
        function(d){
            if(city===''){
                return;
            }
            console.log();
            
           if(d.response.status=== 404){
            setWeather('Error 404 Enter Correct city Name !')
           }
           
            
            setDesc('')
            setTemp(0)
            setWind(0)
            setHumidity(0)
            setTrue(false)
        }
    )









    return (
        <WeatherContext.Provider value={{ city,setCity,wind,humidity,temp,weather,desc ,icon,True}}>
            {data.children}
        </WeatherContext.Provider>
    )
}

export default Context
export { WeatherContext }

