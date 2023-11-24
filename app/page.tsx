import Image from 'next/image'

'use client';
import { useState } from 'react';

export default function Home() {
  return (
    <div className='container m-2'>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
    
  )
  function Square(){

    const [value,setValue]=useState('.')
    
    function handleClick(){
      setValue('X');
    }
    return <div onClick={handleClick} className='col-3 col-md-2 p-3 border 
    fs-1 fw-bold text-center'>{value}</div>
  }
}
