'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import img from '../a.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './_components/Header/Header'
import { useRouter } from 'next/navigation'
import DatePicker from "react-datepicker";
import Cozy  from "../assets/1.jpg";
import Deluxe   from "../assets/2.jpg";
import Suite   from "../assets/3.jpg";
import Premium   from "../assets/4.jpg";
import Royal   from "../assets/5.jpg";
import King     from "../assets/6.jpg"; 


import "react-datepicker/dist/react-datepicker.css";
export default function Home() {

  const [price, setPrice] = useState(500)
  const [type, setType] = useState('All')
  const Router = useRouter()
const [startDate, setStartDate] = useState(new Date());
  const rooms = [
    {
      id: 1,
      title: "Cozy Single Room",
      paragraph: `Perfect for solo travelers, our cozy single room offers comfort and style with modern`,
      price: 89,
      guests: 1,
      type: "Single",
      img : Cozy
    },
    {
      id: 2,
      title: "Deluxe Double Room",
      paragraph: `Spacious double room with elegant furnishings, ideal for couples seeking a romantic getaway.`,
      price: 149,
      guests: 2,
      type: "Double",
       img : Deluxe
    },
    {
      id: 3,
      title: "Executive Suite",
      paragraph: `Luxurious suite with separate living area, premium amenities, and stunning city views.`,
      price: 299,
      guests: 2,
      type: "Suite",
       img : Suite
    },
    {
      id: 4,
      title: "Premium Double Room",
      paragraph: `Comfortable double room with modern design and all essential amenities for a pleasant stay.`,
      price: 129,
      guests: 2,
      type: "Double",
       img : Premium
    },
    {
      id: 5,
      title: "Royal Suite",
      paragraph: `Our most luxurious accommodation with premium facilities, butler service, and panoramic views.`,
      price: 449,
      guests: 3,
      type: "Suite",
       img : Royal
    },
    {
      id: 6,
      title: "Deluxe King Room",
      paragraph: `Spacious deluxe room with king-size bed, perfect for those seeking extra comfort and luxury.`,
      price: 189,
      guests: 2,
      type: "Deluxe",
       img : King
    },
  ];

  const filteredRooms = rooms.filter(room => {
    return (
      room.price <= price &&
      (type === 'All' || room.type === type)
    )
  })

  return <>

    <Header />

    <section>
      <div className="container mx-auto px-4 mt-10 mb-20 min-h-[90vh]">

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-12 lg:col-span-3">

            <div className="p-6 rounded-2xl shadow-xl space-y-5 sticky top-4 bg-white">

              <h3 className="text-xl font-bold">Filters</h3>

              <div>
                <label className="block mb-2 font-medium">Room Type</label>

                {["All", "Single", "Double", "Suite", "Deluxe"].map((item) => (
                  <label key={item} className="flex items-center gap-2 mb-1 cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value={item}
                      checked={type === item}
                      onChange={(e) => setType(e.target.value)}
                      className="accen"
                    />
                    {item}
                  </label>
                ))}
              </div>

              <div>
                <label className="block mb-2 font-medium ">
                  Price: {price}$
                </label>

                <input
                  type="range"
                  min="0"
                  max="500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full accen"
                />

                <div className="flex justify-between text-sm mt-1">
                  <span>0$</span>
                  <span>500$</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setPrice(500)
                  setType('All')
                }}
                className="w-full py-2  text-white font-semibold border rounded-xl bg  transition"
              >
                Reset Filters
              </button>

            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">

            <h3 className="text-2xl font-semibold mb-4">
              Available Rooms ({filteredRooms.length})
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredRooms.map((room) => (
                <div key={room.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">

                  <Image
                    width={326}
                    height={192}
                    className="w-full h-[180px] object-cover"
                    src={room.img}
                    alt={room.title}
                  />

                  <div className="p-4 text-center">

                    <h3 className="text-lg font-semibold mb-1">
                      {room.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-2">
                      {room.paragraph}
                    </p>

                    <div className="flex justify-center gap-4 mt-3 text-sm">

                      <span className="flex items-center gap-1 text-gray-600">
                        <FontAwesomeIcon icon={faUsers} className="text-xs" />
                        {room.guests} guests
                      </span>

                      <span className="font-semibold text-emerald-600">
                        ${room.price}/night
                      </span>

                    </div>

                    <button
                      onClick={() => Router.replace(`/RoomDetails/${room.id}`)}
                      className="w-full mt-4 bg text-white py-2 rounded-lg hover:bg-emerald-700 transition cursor-pointer"
                    >
                      View Details
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>

  </>
}