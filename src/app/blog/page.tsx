import BlogComponentDummy from "@/components/blog/BlogComponentDummy";

// 1. Create a clean fetch function outside the component
async function getAllBlogs() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://dummyjson.com";
  const res = await fetch(`${baseUrl}/posts`, {
    next: { revalidate: 3600 } // Optional: Caches data for 1 hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  return data?.posts || [];
}

// 2. Turn the page into an async Server Component
export default async function BlogPage() {
  const blogs = await getAllBlogs(); // Fetch happen directly on the server

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        អត្ថបទប្លុកទាំងអស់
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {blogs.map(({ id, title, body }: any) => (
          <BlogComponentDummy 
            id={id} 
            title={title} 
            body={body} 
            key={id} 
          />
        ))}
      </div>
    </div>
  );
}