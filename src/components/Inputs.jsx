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


    const handelUnitsChange = (e) => {
        const selectUnit = e.currentTarget.name;
        if(units!== selectUnit){
            setUnits(selectUnit);
        }
    }
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className="flex flex-row  w-4/6 items-center justify-center space-x-6">
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} placeholder='Search...' type="text" className='text-xl font-light p-2 focus:outline-none shadow-xl shadow-gray-500 capitalize placeholder:lowercase' />
                <UilSearch onClick={handelSearchClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-150' />
                <UilLocationPoint onClick={handelLocationClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-150' />
            </div>



            <div className="flex flex-row justify-center items-center w-1/4 my-6">
                <button onClick={handelUnitsChange} name='metric' className='text-xl text-white font-light mx-2 hover:scale-125 transition ease-out'>°C</button>
                <p className='text-white text-xl mx-1'>|</p>
                <button onClick={handelUnitsChange} name='impirial' className='text-xl text-white font-light mx-2 hover:scale-125 transition ease-out'>°F</button>
            </div>
        </div>
    )
}

export default Inputs