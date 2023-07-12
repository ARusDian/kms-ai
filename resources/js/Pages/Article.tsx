import Navbar from '@/Components/Home/Navbar'
import React from 'react'
import ReactLoading from "react-loading";

const Article = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-center items-center min-h-screen mt-24 gap-10">
        <ReactLoading color='#51B3AA' type='spinningBubbles'/>
        <p className='text-2xl font-roboto font-semibold italic opacity-40'>Sabar ya😁, halaman ini masih dalam tahap pembuatan...</p>
      </div>
    </div>
  )
}

export default Article