import { TProductCard } from "@/types/productCard.type";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const TopRatedProductCard = ({ product }: { product: TProductCard }) => {
  return (
    <div className="relative bg-white shadow-sm rounded-lg hover:shadow-lg">
      <div>
        <p className="absolute left-2 top-2 w-14 text-sm font-normal px-2 bg-black text-white rounded-lg">
          -30%
        </p>
      </div>
      <Image
        className="rounded-xl border-md p-8"
        src={product.image}
        sizes="(max-width: 768px) 100vw, 
                 (max-width: 1024px) 50vw, 
                 25vw"
        height={0}
        width={0}
        style={{ height: "300px", width: "80%", margin: "0 auto" }}
        alt="Product image"
      />
      <hr className="bg-gray-300 border-1" />
      <h1 className="w-64 truncate mt-4 mb-2 px-4 text-md font-normal">
        {product.title}
      </h1>

      <p className="font-medium text-md mb-16 text-red-500 px-4">
        ${product.price}
      </p>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-gray-50/100 rounded ">
        <div className=" flex items-center flex-row font-medium text-md">
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStarHalfAlt className="text-orange-500" />
        </div>

        <div className="flex flex-row  items-center">
          <p className="font-medium mr-3">Add</p>
          <button className="border rounded-full p-2 cursor-pointer">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProductCard;
