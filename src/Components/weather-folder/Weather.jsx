import React, { useContext} from 'react'
import error from '../../Assets/404.png'
import clear from '../../Assets/clear.png'
import mist from '../../Assets/mist.png'
import snow from '../../Assets/snow.png'
import cloud from '../../Assets/cloud.png'
import rain from '../../Assets/rain.png'
import { WeatherContext } from '../../Context'



const Weather = () => {

const{desc,weather,temp}=useContext(WeatherContext)




const{True}=useContext(WeatherContext)

let weatherImage

switch(weather){
  case 'Clouds': weatherImage=<img src={cloud} alt='Not Found' className='w-6/12 sm:w-5/12' /> ;break;
  case 'Rain': weatherImage=<img src={snow} alt='Not Found' className='w-6/12 sm:w-5/12' />;break;
  case 'Haze': weatherImage=<img src={mist} alt='Not Found' className='w-6/12 sm:w-5/12'/>;break;
  case 'Clear': weatherImage=<img src={clear} alt='Not Found' className='w-6/12 sm:w-5/12'/>;break;
  case 'Snow': weatherImage=<img src={rain} alt='Not Found' className='w-6/12 sm:w-5/12' />;break;
  case 'Error 404 Enter Correct city Name !': weatherImage=<img src={error} alt='Not Found' className='w-7/12' />;break;
  default: weatherImage=<img src={clear} alt='Not Found' className='w-6/12 sm:w-/12' />
}





  return (
    <div className='flex  flex-col align-middle items-center gap-1' >
        {weatherImage}
        {True?<p className='text-white text-5xl sm:text-5xl font-bold'>{
        Math.floor(temp-273.15)
          }<span >°C</span></p>:""}
        <p className='text-white text-2xl sm:text-2xl font-medium mt-1'>{desc}</p>
        <p className='text-white text-2xl sm:text-3xl font-medium text-center'>{weather}</p>
    </div>
  )
}

export default Weather



//`"https://openweathermap.org/img/wn/04d@4x.png "`


//image styles className='w-6/12 ' , className='w-7/12'

//className='w-full h-full flex  flex-col align-middle items-center  '
//className='text-white mt-2 text-6xl relative font-bold'
//style={{'fontSize':'0.5em'}}className='font-medium absolute -top-2.4'
//className='text-white text-2xl font-medium'
//className='text-white text-2xl font-medium text-center'