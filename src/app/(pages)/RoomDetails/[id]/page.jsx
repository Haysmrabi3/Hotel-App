"use client";

import Image from "next/image";
import React, { useState, useContext } from "react";
import img from "@/assets/b.jpg";
import { useParams, useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "@/Context/UserContext";
import { RoomContext } from "@/Context/RoomContect";

export default function Page() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const router = useRouter();
  const { userLoged } = useContext(UserContext);

  function handleBooking(id) {
    if (userLoged) {
      router.push(`/DashBoard/` + id);
    } else {
      router.push("/LogIn");
    }
  }
  const {  setRoomDetails } = useContext(RoomContext);







  const rooms = [
    {
      id: 1,
      title: "Cozy Single Room",
      paragraph:
        "Perfect for solo travelers, our cozy single room offers comfort and style with modern",
      price: 89,
      guests: 1,
      type: "Single",
      image: img,
      amenities: [
        { name: "Free WiFi" },
        { name: "Air Conditioning" },
        { name: "TV" },
      ],
    },
    {
      id: 2,
      title: "Deluxe Double Room",
      paragraph:
        "Spacious double room with elegant furnishings, ideal for couples seeking a romantic getaway.",
      price: 149,
      guests: 2,
      type: "Double",
      image: img,
      amenities: [
        { name: "Free WiFi" },
        { name: "Air Conditioning" },
        { name: "TV" },
        { name: "Mini Bar" },
        { name: "Room Service" },
      ],
    },
    {
      id: 3,
      title: "Executive Suite",
      paragraph:
        "Luxurious suite with separate living area, premium amenities, and stunning city views.",
      price: 299,
      guests: 2,
      type: "Suite",
      image: img,
      amenities: [
        { name: "Free WiFi" },
        { name: "Air Conditioning" },
        { name: "TV" },
        { name: "Mini Bar" },
        { name: "Room Service" },
        { name: "Balcony" },
        { name: "Jacuzzi" },
      ],
    },
  ];

  function getRoomById(id) {
    return rooms.find((room) => room.id === id);
  }

  const params = useParams();
  const id = Number(params.id);
  const room = getRoomById(id);

  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const totalDays =
    checkIn && checkOut
      ? Math.ceil((checkOut - checkIn) / MS_PER_DAY)
      : 0;

  const totalPrice = totalDays * (room?.price || 0);

  const bookingData =
    checkIn && checkOut
      ? {
          roomId: room?.id,
          checkIn,
          checkOut,
          totalDays,
          totalPrice,
          bookingDate: new Date(),
        }
      : null;

  if (!room)
    return <div className="p-10 text-center">Room not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">

          <div className="space-y-6">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover"
              />
              <span className="absolute right-4 top-4 bg-emerald-600 text-white px-3 py-1 rounded-md text-sm">
                {room.type}
              </span>
            </div>

            <h1 className="text-4xl font-bold">{room.title}</h1>

            <div className="flex gap-4 text-gray-500">
              <span>{room.guests} guest</span>
              <span className="text-xl font-semibold text-emerald-600">
                ${room.price}/night
              </span>
            </div>

            <div className="border p-6 rounded-lg">
              <h2 className="text-2xl mb-4">Description</h2>
              <p className="text-gray-500">{room.paragraph}</p>
            </div>

            <div className="border p-6 rounded-lg">
              <h2 className="text-2xl mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.map((item, i) => (
                  <div key={i} className="bg-gray-100 p-2 rounded text-sm">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sticky top-24 h-fit border p-6 rounded-lg bg-white shadow">

            <h2 className="text-2xl mb-4">Book This Room</h2>

            <div className="mb-4">
              <label className="block mb-1">Check-in</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                minDate={new Date()}
                className="w-full border p-2 rounded"
                placeholderText="Select date"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Check-out</label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                minDate={checkIn || new Date()}
                className="w-full border p-2 rounded"
                placeholderText="Select date"
              />
            </div>

            {checkIn && checkOut && (
              <div className="bg-gray-100 p-4 rounded mt-4 text-sm space-y-2">
                <p>Days: {totalDays}</p>
                <p>Price per night: ${room.price}</p>
                <p className="font-bold text-emerald-600">
                  Total: ${totalPrice}
                </p>
              </div>
            )}

            {(!checkIn || !checkOut) && (
              <p className="text-red-500 text-sm mt-2">
                Please select dates first
              </p>
            )}

            <button
              onClick={() => {
                console.log(bookingData); 
                handleBooking(id);
                setRoomDetails((prev) => [...prev, bookingData]);
              }}
              disabled={!checkIn || !checkOut}
              className={`w-full mt-6 py-3 rounded text-white transition cursor-pointer
                ${
                  !checkIn || !checkOut
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-emerald-600 hover:bg-emerald-700"
                }
              `}
            >
              Book Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}