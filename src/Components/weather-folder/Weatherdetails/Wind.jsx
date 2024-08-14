import React, { useContext } from 'react'
import { WeatherContext } from '../../../Context'

const Wind = () => {

const{wind}=useContext(WeatherContext)



  return (
    <div className='flex flex-col   leading-none  sm:flex-row  ' >
        <i class='bx bx-wind text-white font-medium text-5xl '></i>
        <div className=' font-medium text-3xl sm:text-xl'>
        <p className='text-white leading-none '>{wind} Km/h</p>
        <p className='text-white leading-none '>Wind Speed</p>
        </div>
       </div>
  )
}

export default Wind



//className='flex items-center'  style={{'fontSize':'1.7em'}} sm:text-2xl
//text-white text-5xl 
//className='text-white '

//className='text-white '