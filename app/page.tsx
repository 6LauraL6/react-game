import Image from 'next/image'

export default function Home() {
  return (
    <div className='container m-2'>
      <div className='row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className='row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className='row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
    
  )
  function Square(){
    return <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>1</div>


  }
}
