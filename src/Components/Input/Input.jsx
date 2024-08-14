import React, { useContext, useState } from 'react'
import { WeatherContext } from '../../Context'

const Input = () => {


  const { city, setCity } = useContext(WeatherContext)

  const [input, setInput] = useState()

  function handleCity(e) {
    setInput(e.target.value)
    console.log(input);

  }
  function click() {
    setCity(input)
    console.log(city);
    setInput('')
  }



  return (
    <div className=' relative   h-12 sm:h-14  flex align-middle items-center justify-between overflow-hidden rounded-lg transition-all border ' >

      <i className='bx bxs-map  text-2xl sm:text-3xl text-white ml-1 sm:ml-2 '  ></i>

      <input for='input' value={input} onChange={handleCity} type='text' placeholder='Enter Your Location'
        className='w-full h-full bg-transparent placeholder:px-1 sm:placeholder:px-1.5   absolute px-8  -top-0 placeholder:text-white sm:placeholder:text-xl outline-none rounded-lg text-white sm:px-10' />

      <button onClick={click} className='bx bx-search text-white text-2xl sm:text-3xl mr-1 sm:mr-2 hover:bg-[rgba(250,250,250,0.1)] transition- p-1 rounded-full delay-50 cursor-pointer z-10 '  ></button>


    </div>
  )
}

export default Input


//className=' w-full h-10 border rounded-lg relative flex items-center transition-all'
//text-2xl absolute right-1 text-white hover:bg-[rgba(250,250,250,0.1)] transition- p-1 rounded-full delay-50
//className='w-full bg-transparent h-full px-8 absolute -top-0.5 outline-none  placeholder:capitalize text-white placeholder:text-white'
//text-2xl absolute left-1 text-white