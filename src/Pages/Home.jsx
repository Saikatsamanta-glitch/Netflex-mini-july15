import React from 'react'
import Moviecard from '../Components/Moviecard'
import data from '../data';

export default function Home() {
  return (
    <div className='container'>
      <h1 className='text-center'> Welcome to <span className='text-red'> Netflix-Mini 🎬  </span></h1>
      <hr />
      <h3>favourite ♥</h3>

      <div className="card_container">
        {
          data.map((val)=>{
            return <Moviecard name={val.name} img={val.img} />
          })
        }
      </div>

    </div>
  )
}
