'use client'
import { UserContext } from '@/Context/UserContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useContext } from 'react'







export default function SignUp() {
  let { userLoged , setUserLoged } = useContext(UserContext)


  const router = useRouter();






  return <>
    <div className="h-[100vh] flex justify-center items-center">
    <div className=" p-10 rounded-2xl shadow-2xl ">
        <h2 className='text-center text-3xl font-semibold'>Create an Account</h2>
        <p className='text-center mt-2 '>Fill in your details to get starte.</p>
        <form className=''>
            <label className='block font-semibold mt-5' htmlFor="email">Name</label>
            <input required type="Name" id='Name' className='w-full py-2  rounded-2xl font-semibold mt-2 border px-30' />
            <label className='block font-semibold mt-5' htmlFor="Name">Email</label>
            <input required type="email" id='email' className='w-full py-2 px-2 rounded-2xl font-semibold mt-2 border' />
            <label className='block font-semibold mt-5' htmlFor="password">password</label>
            <input required type="password" id='password' className='w-full py-2 px-2 rounded-2xl font-semibold mt-2 border' />
            <label className='block font-semibold mt-5' htmlFor="password">password</label>
            <input required type="Repassword" id='password' className='border w-full py-2 px-2 rounded-2xl font-semibold mt-2' />
            <button className='font-semibold w-full py-3 mt-5 rounded-3xl text-white bg-emerald-700 cursor-pointer' >Create Account</button>
            <div className="flex gap-2 justify-center mt-3 text-gray-500">
              <p className='font-semibold'>Already have an account?</p>
              <Link className='font-semibold text-emerald-700'  href={`LogIn`} >LogIN</Link>
            </div>
        </form>
    </div>
  </div>
  
  
  </>
}
