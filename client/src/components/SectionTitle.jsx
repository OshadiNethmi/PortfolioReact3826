import React from 'react'

function SectionTitle({
  title,
}
) {
  return (
    <div className='flex gap-10 items-center py-10'>
      <h1 className='text-3xl text-white sm:text-2xl'>{title}</h1>
      <div className='w-80 h-[1px] bg-tertiary sm:w-40'></div>
    </div>
  )
}

export default SectionTitle