import React from 'react'
import Image from 'next/image'

import { blog_type } from '@/type/blog/blog'
export default function BlogComponent({profile,name,position}: blog_type ) {
  return (
    <>
     <div className= " w-[200px] h-[300px]">
         <img
        src={profile} 
        alt={name}
        width={200}
        height={200}
        
      />

      
      <h2>Name: {name}</h2>
      <h3>Position: {position}</h3>
     </div>
   

    </>
  )
}