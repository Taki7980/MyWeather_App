import React from 'react'

function TopButtons({ setQuery }) {

  const cities = [
    {
      id: 1,
      title: 'Berlin',

    },
    {
      id: 2,
      title: 'Barcelona',

    },
    {
      id: 3,
      title: 'Osaka',

    },
    {
      id: 4,
      title: 'Kolkata',

    },
    {
      id: 5,
      title: 'New York',

    },
  ]
  return (
    <div className='flex lg:flex-row items-center justify-around py-5'>
      {cities.map((city) => (
        <button key={city.id} className='text-white lg:text-lg lg:font-medium sm:font-thin sm:mx-5' onClick={() => setQuery({ q: city.title })}>{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons