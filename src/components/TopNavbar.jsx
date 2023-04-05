import React from "react";
import { useState } from "react";

export default function NavBar({ setQuery }) {
      const [navbar, setNavbar] = useState(false);
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
            <nav className="w-full bg-transparent shadow font-Poppins">
                  <div className="justify-between lg:pl-[1rem] lg:pr-[3rem] mx-auto lg:max-w-7xl md:items-center md:flex">
                        <div>
                              <div className="flex items-center justify-around py-3 md:py-5 md:block">
                                    <a href="/">
                                          <h2 className="text-base font-bold text-black">NsWeather</h2>
                                    </a>
                                    <div className="md:hidden">
                                          <button
                                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                                onClick={() => setNavbar(!navbar)}
                                          >
                                                {navbar ? (
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-6 h-6 text-white"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                      >
                                                            <path
                                                                  fillRule="evenodd"
                                                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                  clipRule="evenodd"
                                                            />
                                                      </svg>
                                                ) : (
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-6 h-6 text-white"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                      >
                                                            <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  d="M4 6h16M4 12h16M4 18h16"
                                                            />
                                                      </svg>
                                                )}
                                          </button>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <div
                                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                          }`}
                              >

                                    <div className="mt-3 space-y-2 lg:hidden flex flex-col justify-center">
                                          {cities.map((city) => (
                                                <button key={city.id} className='text-white lg:text-lg lg:font-medium sm:font-thin sm:mx-5' onClick={() => setQuery({ q: city.title })}>{city.title}</button>
                                          ))}
                                    </div>
                              </div>
                        </div>
                        <div className="hidden w-[70%] md:flex sm:flex sm:justify-around ">
                              {cities.map((city) => (
                                    <button key={city.id} className='text-white text-sm font-extrabold px-4' onClick={() => setQuery({ q: city.title })}>{city.title}</button>
                              ))}
                        </div>
                  </div>
            </nav>
      );
}


