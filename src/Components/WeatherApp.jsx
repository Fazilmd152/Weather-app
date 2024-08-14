import React from 'react'
import Input from './Input/Input'
import Weather from './weather-folder/Weather'
import Climate from './weather-folder/Weatherdetails/Climate'

const WeatherApp = () => {
  return (
    <div className=' flex flex-col  p-3  bg-[rgba(255,255,255,.1)] backdrop-blur-xl justify-between h-svh sm:border-[rgba(255,255,255,0.2)] rounded-2xl transition-all  ease-out  overflow-hidden sm:w-[400px] sm:h-[555px] ' >
        <Input/>
        <Weather/>
        <Climate/>
    </div>
  )
}

export default WeatherApp


//style={{'width':'400px','height':'555px '}}  style={{'height':'100vh'}}

//className=' h-5/6 w-full bg-[rgba(255,255,255,.1)] flex flex-col justify-between  backdrop-blur-xl border-2 border-[rgba(255,255,255,0.2)] relative rounded-2xl p-5  align-middle  overflow-hidden transition-all  ease-out  '