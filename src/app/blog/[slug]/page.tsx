import { blogTypeDummy } from "@/components/blog/BlogComponentDummy";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fetch single post directly on the server
async function getSingleBlog(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://dummyjson.com";
  const res = await fetch(`${baseUrl}/posts/${id}`);
  
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function BlogSlug({ params }: PageProps) {
  const { slug } = await params;
  const blog: blogTypeDummy | null = await getSingleBlog(slug);

  if (!blog) {
    return <div className="text-center py-20 text-white">Blog post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-10">
      <div className="max-w-3xl mx-auto px-6 py-10 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
        <div className="mb-6 rounded-xl overflow-hidden aspect-video">
          <img 
            src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg" 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-xs font-bold text-purple-400 bg-purple-950/50 px-3 py-1 rounded-md">
          Post ID: {slug}
        </span>
        <h1 className="text-4xl font-extrabold my-4 tracking-tight">
          {blog.title}
        </h1>
        <hr className="border-gray-200 dark:border-gray-700 my-4" />
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed capitalize">
          {blog.body}
        </p>
      </div>
    </div>
  );
}