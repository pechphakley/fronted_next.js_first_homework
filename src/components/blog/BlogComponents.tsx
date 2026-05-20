
import { blog_type } from "@/type/blog/blog-type";
import Image from "next/image";

export default function BlogComponent({ profile, name, position }: blog_type) {
  return (
    <div className="flex flex-col gap-5">
      <Image
        width={250}
        height={250}
        loading="eager"
        src={profile}
        alt={"Image of : " + name}
      />
      <hr />
      <h1>Name : {name}</h1>
      <h2>Position : {position}</h2>
    </div>
  );
}