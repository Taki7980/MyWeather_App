import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'

function Forcast({ title, items }) {
    return (
        <>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}: </p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row items-center justify-between text-white">
                {items.map(item => (

                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-lg">{item.title}</p>
                        <img src={iconUrlFromCode(item.icon)} className="w-12 my-1" alt="" srcset="" />
                        <p className="font-medium">{`${(item.temp - 273.15).toFixed()}°C`}</p>
                    </div>
                ))}
            </div>




        </>
    )
}

export default Forcast