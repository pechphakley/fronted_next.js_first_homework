import ProductCard from "@/components/productComponent/ProductCard";


export default function HomeworkPage() {
  const products = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/50/72/31/507231f355805ba1ba95693eec59a497.jpg",
      title: "MENS CASUAL PREMIUM SLIM",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley...",
      price: 22.3,
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/44/8a/2d/448a2d4efcee2ac9170ce52dc350a127.jpg",
      title: "MODERN STREET HOODIE",
      description:
        "Comfortable oversized hoodie with premium cotton fabric...",
      price: 35.5,
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/39/aa/79/39aa792270582b1287d71f95bf65eb9b.jpg",
      title: "WINTER LEATHER JACKET",
      description:
        "Classic leather jacket for winter with warm inner lining...",
      price: 58.9,
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/82/c5/b1/82c5b1b1f449f93a42bd2796dbab10e1.jpg",
      title: "LUXURY SILVER WATCH",
      description:
        "Elegant silver watch with waterproof premium design...",
      price: 120.0,
    },
    {
      id: 5,
      image: "https://i.pinimg.com/1200x/8c/11/7a/8c117aeba9aa82199ca7bbd072c728d0.jpg",
      title: "RUNNING SPORT SHOES",
      description:
        "Lightweight running shoes designed for maximum comfort...",
      price: 42.7,
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/52/83/62/528362f88d5195892bcb4a642a1aac4f.jpg",
      title: "CLASSIC BLACK CAP",
      description:
        "Minimal black cap with adjustable premium fitting...",
      price: 12.5,
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/cd/b4/b4/cdb4b47dd02ee4faa2fbb4c9f61f60e9.jpg",
      title: "TRAVEL BACKPACK",
      description:
        "Durable backpack with large storage and waterproof material...",
      price: 48.9,
    },
    {
      id: 8,
      image: "https://i.pinimg.com/1200x/48/15/dd/4815dd5295157f395adb49a94c52c634.jpg",
      title: "BLUE DENIM JEANS",
      description:
        "Regular fit denim jeans with stretchable premium fabric...",
      price: 30.2,
    },
    {
      id: 9,
      image: "https://i.pinimg.com/736x/7f/ad/a2/7fada26f0c27d1e9bcbfe56547092f35.jpg",
      title: "FASHION SUNGLASSES",
      description:
        "Stylish sunglasses with UV protection and modern frame...",
      price: 18.6,
    },
    {
      id: 10,
      image: "https://i.pinimg.com/1200x/a4/22/23/a42223aab4343a194d56dfe0f5bc4b34.jpg",
      title: "OVERSIZED WHITE TSHIRT",
      description:
        "Soft cotton oversized tshirt for everyday streetwear style...",
      price: 20.4,
    },
    {
      id: 11,
      image: "https://i.pinimg.com/1200x/e2/82/64/e282647d8fb0d056bc4d5732f43f9c7e.jpg",
      title: "HIGH TOP SNEAKERS",
      description:
        "Premium high-top sneakers with comfortable inner sole...",
      price: 64.9,
    },
    {
      id: 12,
      image: "https://i.pinimg.com/736x/fd/44/9d/fd449d2d031908f1c6171f75fea2dd7a.jpg",
      title: "LUXURY MEN PERFUME",
      description:
        "Long-lasting premium fragrance with elegant bottle design...",
      price: 75.0,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-10 bg-gray-100">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}