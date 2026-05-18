
import React, { useState } from 'react'

export default function AddToCardComponent() {

    const [count,setCount]= useState(0);
    
  return (
    <>
    <h1 className=" text-6xl text-6xl font-bold">Card: {count}</h1>
    <button className=" bg-amber-700 border p-4 rounded-2xl" onClick={()=>setCount(count+1)}>
   Add to Card
    </button>
    <button className=" bg-amber-700 border p-4 rounded-2xl" onClick={()=>setCount(0)}>
   decrease
    </button>
    </>
  )
}
