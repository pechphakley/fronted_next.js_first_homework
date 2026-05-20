"use client";


import BlogComponentDummy from "@/components/blog/BlogComponentDummy";
import React, { useEffect, useState } from "react";

export default function BlogPage() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function getAllBlog() {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/posts");
      const data = await res.json();
      setBlog(data?.posts);
      return data;
    }
    getAllBlog();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {blog?.map(({ id, title, body }, _) => (
        <BlogComponentDummy id={id} title={title} body={body} key={_} />
      ))}
    </div>
  );
}