import React from 'react'
import Humudity from './Humudity'
import Wind from './Wind'

const Climate = () => {
  return (
    <div className='flex justify-between px-2 mb-6 '>
       <Wind/>
       <Humudity/>
    </div>
  )
}

export default Climate