import { BlogType } from "@/types/blog";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getSingleBlog(id: string): Promise<BlogType | null> {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
      next: { revalidate: 60 } // Revalidate caches every minute
    });
    
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching single post detail:", error);
    return null;
  }
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  // Return clean fallback if ID is missing or invalid
  if (!blog) {
    return (
      <div className="text-center text-white py-20 text-xl">
        <p>Blog post not found.</p>
        <Link href="/blog" className="text-purple-400 underline mt-4 inline-block text-sm">
          Go back to blogs
        </Link>
      </div>
    );
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

        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-purple-400 bg-purple-950/50 px-3 py-1 rounded-md">
            Post ID: {slug}
          </span>
          <Link href="/blog" className="text-xs text-purple-400 hover:underline">
            ← Back to List
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold my-4 tracking-tight capitalize">
          {blog.title}
        </h1>

        <hr className="border-gray-200 dark:border-gray-700 my-4" />

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed first-letter:uppercase">
          {blog.body}
        </p>

      </div>
    </div>
  );
}