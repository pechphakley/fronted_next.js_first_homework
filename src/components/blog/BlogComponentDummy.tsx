import Link from "next/link";

export interface blogTypeDummy {
  id: number;
  title: string;
  body: string;
}

export default function BlogComponentDummy({ id, title, body }: blogTypeDummy) {
  return (
    <Link 
      href={`/blog/${id}`}
      className="block w-full max-w-sm mx-auto h-full transition-all duration-300 transform hover:scale-[1.02]"
    >
      <div className="flex flex-col h-full overflow-hidden bg-white border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl rounded-2xl dark:bg-slate-800 transition-shadow duration-300">
        <div className="overflow-hidden aspect-video flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
            alt={title}
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="capitalize text-xs font-bold tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/50 w-fit px-2.5 py-1 rounded-md mb-3 flex-shrink-0 line-clamp-1">
            <span>{body}</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 mb-2 hover:text-purple-700 dark:hover:text-purple-400 transition-colors flex-shrink-0">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 leading-relaxed flex-1">
            Getting started with Tailwind CSS is easy: install it via npm, configure settings, and build.
          </p>
        </div>
      </div>
    </Link>
  );
}