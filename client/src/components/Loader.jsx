import React from 'react'
import '..'

function Loader() {
  const customFontStyle = {
    fontFamily: 'AngelineVintage, sans-serif'
  };

  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
      <div className='flex gap-5 text-6xl font-semibold sm:text-3xl' style={customFontStyle}>
        <h1 className='text-tertiary o'>Viva</h1>
        <h1 className='text-white n'>La</h1>
        <h1 className='text-secondary a'>Vida</h1>
      </div>
    </div>
  )
}

export default Loader