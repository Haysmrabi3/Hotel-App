"use client";

import { RoomContext } from "@/Context/RoomContect";
import { faBed, faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useContext } from "react";

export default function Page() {

  const { roomDetails, setRoomDetails } = useContext(RoomContext);

  function handleCancel(index) {
    const updatedRooms = roomDetails.filter((_, i) => i !== index);
    setRoomDetails(updatedRooms);
  }

  if (!roomDetails || roomDetails.length === 0) {
    return (
      <div className="text-center px-4">
        <p className="mt-10 text-3xl sm:text-5xl font-semibold">
          No booking yet
        </p>
        <Link href={`/`}>
          <button className="mt-5 bg text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl">
            Book a Room
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">

      <h4 className="font-semibold text-xl sm:text-2xl mt-10">
        My Reservations
      </h4>

      {roomDetails.map((room, index) => (
        <div
          key={index}
          className="mt-6 p-4 sm:p-5 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-3xl"
        >
          <div className="w-full">

            <div className="flex items-center gap-2 mb-3">
              <FontAwesomeIcon icon={faBed} />
              <h3 className="text-lg sm:text-2xl font-semibold">
                Room #{room.roomId}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-3 text-sm sm:text-base">
              <FontAwesomeIcon icon={faCalendar} />
              <p>
                {new Date(room.checkIn).toLocaleDateString()} –{" "}
                {new Date(room.checkOut).toLocaleDateString()}
              </p>

              <FontAwesomeIcon icon={faLocationDot} className="text-green-600" />
              <span className="font-semibold text-green-600">
                {room.totalPrice} $
              </span>
            </div>

            <div className="text-sm sm:text-base">
              <p>
                Booked on{" "}
                {new Date(room.bookingDate).toLocaleDateString()}
              </p>
            </div>

          </div>

          <div className="w-full md:w-auto">
            <button
              onClick={() => handleCancel(index)}
              className="w-full md:w-auto bg-red-700 py-3 px-6 text-white rounded-2xl font-semibold text-lg"
            >
              Cancel
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}