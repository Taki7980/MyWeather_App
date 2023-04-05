import React, { useState } from 'react'
import { UilLocationPoint, UilSearch } from '@iconscout/react-unicons'


function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("")

    const handelSearchClick = () => {
        if (city !== '') {
            setQuery({ q: city })
        }
    }

    const handelLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({lat, lon})
            })
               
        }
    }

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className="flex flex-row  lg:w-4/6 sm:w-[50%] items-center justify-center space-x-3">
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} placeholder='Search...' type="text" className='text-xl font-light p-2 focus:outline-none shadow-xl shadow-gray-500 capitalize placeholder:lowercase sm:w-[30%] lg:w-auto' />
                <UilSearch onClick={handelSearchClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-150' />
                <UilLocationPoint onClick={handelLocationClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-150' />
            </div>
        </div>
    )
}

export default Inputs