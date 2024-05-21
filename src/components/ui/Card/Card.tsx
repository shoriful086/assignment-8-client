"use client";

import { TProductCard } from "@/types/productCard.type";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";

const Card = ({ product }: { product: TProductCard }) => {
  const router = useRouter();
  const handleImageClick = () => {
    router.push(`/products/${product._id}`);
  };
  return (
    <div className="w-full relative rounded-lg p-4 lg:p-0 mb-4">
      {/* <div>
        <p className="absolute left-2 top-2 w-14 text-sm font-normal px-2 bg-black text-white rounded-lg">
          -30%
        </p>
      </div> */}
      <Link href={`/dishwashing-items/${product._id}`}>
        <Image
          className="rounded-xl border-md cursor-pointer bg-white"
          src={product.image}
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1024px) 50vw, 
                 25vw"
          height={0}
          width={0}
          style={{ height: "260px", width: "100%", margin: "0 auto" }}
          alt="Product image"
        />
      </Link>
      <p className="w-full mt-2 mb-1 truncate">{product.description}</p>

      <h1 className="w-52 mb-12 truncate mt-42 text-sm font-normal">
        {product.title}
      </h1>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 lg:p-0">
        <p className="font-medium text-lg">${product.price}</p>
        <button className="border rounded-full p-1 cursor-pointer">
          <FaPlus className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Card;
