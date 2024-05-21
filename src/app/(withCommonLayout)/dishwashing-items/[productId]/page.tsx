import Container from "@/components/container/Container";
import { TProductCard } from "@/types/productCard.type";
import Image from "next/image";
import { FaRegHeart, FaSplotch } from "react-icons/fa";

type TParams = {
  params: {
    productId: string;
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://assignment-8-server-im7o0htlt-shoriful-islams-projects.vercel.app/api/v1/products"
  );
  const data = await res.json();
  return data?.data.slice(0, 10).map((item: TProductCard) => ({
    productId: item._id,
  }));
};
const SingleProduct = async ({ params }: TParams) => {
  const res = await fetch(
    `https://assignment-8-server-im7o0htlt-shoriful-islams-projects.vercel.app/api/v1/products/${params.productId}`
  );
  const data = await res.json();

  return (
    <div>
      <Container>
        <h1 className="text-xl max-w-[30ch] lg:max-w-[60ch] mt-10 p-6">
          {data?.data.title}
        </h1>
        <section className="bg-white flex flex-col lg:flex-row  items-center px-4 py-6 mb-10">
          <div className="w-full lg:w-[50%]">
            <div className="relative w-10/12 h-96 lg:w-96 lg:h-96 mx-auto rounded-lg">
              <Image
                src={data?.data?.image}
                layout="fill" // This ensures the image fills the container
                // objectFit="cover" // This ensures the image covers the container while maintaining aspect ratio
                alt="product image"
              />
            </div>
          </div>

          <div className="w-full lg:w-[50%] mx-auto mt-10 lg:mt-0 flex-1 flex flex-col ">
            <div className="w-full flex justify-between items-center lg:-mt-[180px]">
              <h1 className="text-md lg:text-xl font-medium truncate w-3/5">
                {data?.data?.title}
              </h1>
              <FaRegHeart className="cursor-pointer" />
            </div>
            <div className="w-full flex items-center mt-2">
              <p className="text-xl">${data?.data.price}</p>

              <span className="mr-2 ml-2">|</span>
              <FaSplotch className="text-yellow-500 mr-2 cursor-pointer" />
              <FaSplotch className="text-yellow-500 mr-2 cursor-pointer" />
              <FaSplotch className="text-yellow-500 mr-2 cursor-pointer" />
              <FaSplotch className="text-yellow-500 mr-2 cursor-pointer" />
              <FaSplotch className="text-yellow-500 mr-2 cursor-pointer" />
            </div>
            <p className="text-sm mt-2">Brand: {data?.data.category}</p>
            <hr className="border-1 border-yellow-300 my-4" />

            <p>{data?.data.description}</p>
          </div>
        </section>
      </Container>

      <section>
        <div className="bg-gray-100 p-4 mb-20">
          <Container>
            <p className="text-xl font-medium mb-4 ">Description</p>
            <p>{data?.data.description}</p>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
