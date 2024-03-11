import { ProductList } from "@/app/ui/organisms/ProductList";
import { type ProductItemType } from "@/app/ui/types";

const products: ProductItemType[] = [
  {
    id: "1",
    category: "Accesories",
    name: "Glasses",
    price: 2137,
    coverImage: {
      src: "/product_1.jpg",
      alt: "Glasses",
    },
  },
  {
    id: "2",
    category: "Socks",
    name: "Woooool Socks",
    price: 2137,
    coverImage: {
      src: "/product_2.jpg",
      alt: "Socks",
    },
  },
  {
    id: "3",
    category: "Trousers",
    name: "Jeans",
    price: 2137,
    coverImage: {
      src: "/product_3.jpg",
      alt: "Trousers",
    },
  },
  {
    id: "4",
    category: "Accesories",
    name: "Coffe cup",
    price: 2137,
    coverImage: {
      src: "/product_4.jpg",
      alt: "Coffe cup",
    },
  },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-md p12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
      <ProductList products={products} />
    </section>
  );
}
