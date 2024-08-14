import React, { useContext } from 'react'
import { WeatherContext } from '../../../Context'

const Humudity = () => {

const {humidity}=useContext(WeatherContext)


  return (
    <div className='flex flex-col   leading-none sm:flex-row '  >
        <i class='bx bx-water text-white lg:text-[#71ecfc] font-medium text-5xl   leading-none 
        ' ></i>
        <div className='font-medium text-3xl sm:text-xl '>
        <p className='text-white leading-none '>{humidity}%</p>
        <p className='text-white   leading-none'>Humidity</p>
        </div>
        
    </div>
  )
}

export default Humudity


//className='flex items-center'   style={{'fontSize':'1.7em'}}
//text-white text-5xl 