
import { productType } from "@/type/product/productType";
import Image from "next/image";
export default function ProductCard({
  image,
  title,
  description,
  price,
}: productType) {
  return (
    <div className="group relative w-[360px] overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
          New
        </span>
      </div>

      <div className="mt-5">
        <h1 className="line-clamp-1 text-[22px] font-extrabold uppercase tracking-wide text-gray-900">
          {title}
        </h1>

        <p className="mt-2 line-clamp-2 text-[16px] leading-relaxed text-gray-500">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Price</p>

            <span className="text-[30px] font-extrabold text-rose-500">
              ${price}
            </span>
          </div>

          <button className="rounded-2xl bg-black px-6 py-3 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-rose-500 hover:shadow-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}