"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Show() {
    const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  async function HandleClickAdd() {
    try {
      const keyValue = await process.env.domains_structure_KV.get(key)
    //   const keyValue = "from kv"
      console.log('success!')
      setValue(keyValue)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-center mb-20'>Add Your KV</h1>
        <div className='flex flex-col gap-5 max-w-[300px] mx-auto'>
          <input onChange={() =>setKey(event.target.value) } value={key} type="text" placeholder='Add Key' className='p-2 text-[#f09]' />
          <input onChange={() =>setValue(event.target.value) } value={value} type="text" placeholder='Add Value' className='p-2 text-[#f09]' />
        </div>
        <h1>{key}</h1>
        <h1>{value}</h1>
        <button onClick={HandleClickAdd}className='p-3 w-fit mx-auto border border-[#f9f9f9] mt-[40px] rounded-lg'>Add Key</button>
        <Link href={'/'} className='p-3 w-fit mx-auto border border-[#f9f9f9] mt-[40px] rounded-lg'>Add KV</Link>
      </div>
    </>
  )
}
