import Image from 'next/image'

export default function Home() {
  return (
    <div className='container m-2'>
      <div className='row'>
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className='row'>
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className='row'>
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </div>
    
  )
  function Square({value}){
    return <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>{value}</div>
  }
}
