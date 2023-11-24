import Image from 'next/image'

export default function Home() {
  return (
    <div className='container m-2'>
      <div className='row'>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>1</div>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>2</div>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>3</div>
      </div>
      <div className='row'>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>4</div>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>5</div>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>6</div>
      </div>
      <div className='row'>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>7</div>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>8</div>
        <div className='col-3 col-md-2 p-3 border fs-1 fw-bold text-center'>9</div>
      </div>
    </div>
  )
}
