import BlogCard from "@/components/blog/BlogCard";
import { BlogType, DummyJsonResponse } from "@/types/blog";

async function getAllBlogs(): Promise<BlogType[]> {
  try {
    const res = await fetch("https://dummyjson.com/posts", {
      next: { revalidate: 3600 } // Cache data for 1 hour for fast delivery
    });
    
    if (!res.ok) throw new Error("Failed to pull post payload");
    
    const data: DummyJsonResponse = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        អត្ថបទប្លុកទាំងអស់ (All Blogs)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {blogs.map((post) => (
          <BlogCard 
            id={post.id} 
            title={post.title} 
            body={post.body} 
            key={post.id} 
          />
        ))}
      </div>
    </div>
  );
}