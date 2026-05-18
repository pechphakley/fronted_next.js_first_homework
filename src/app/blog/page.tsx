import React from 'react'
import BlogComponent from '@/components/BlogComponent'
import { blog_type } from '@/type/blog/blog-type'

export default function Page() {
  const Blogs: blog_type[] = [
    {
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjxzPYpioVuN11z1mNIzBEIRm7qifY-peJw&s",
      name: "venerable Ley",
      position: "master pagoda"
    },
    {
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjxzPYpioVuN11z1mNIzBEIRm7qifY-peJw&s",
      name: "venerable Ley",
      position: "master pagoda"
    },
    {
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjxzPYpioVuN11z1mNIzBEIRm7qifY-peJw&s",
      name: "venerable Ley",
      position: "master pagoda"
    }
  ]

  return (
    <div className="container mx-auto grid grid-cols-4 gap-5 p-8">
      {Blogs.map((blog, index) => (
        <BlogComponent
          key={index}
          profile={blog.profile.trim()} // .trim() removes the accidental leading space in your URLs
          name={blog.name}
          position={blog.position}
        />
      ))}
    </div>
  )
}