import Container from "@/components/container/Container";
import Card from "@/components/ui/Card/Card";
import { TProductCard } from "@/types/productCard.type";
import { FaAngleRight } from "react-icons/fa";

const FlashSale = async () => {
  const res = await fetch(
    "https://assignment-8-server-im7o0htlt-shoriful-islams-projects.vercel.app/api/v1/products"
  );
  const data = await res.json();

  return (
    <Container>
      {/* flash sale title  */}
      <h1 className="mt-10 px-4 lg:p-0 mb-3 text-2xl">Flash Sale</h1>
      <p className="max-w-[70ch] mb-4 px-4 lg:p-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, explicabo
        illo. Quisquam alias porro necessitatibus temporibus sequi impedit nam
        velit!
      </p>

      {/* flash sale product section  */}
      <section className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
        {data?.data
          .slice(0, 12)
          .filter((product: TProductCard) => product.flashSale === true)
          .map((product: TProductCard) => (
            <Card key={product._id} product={product} />
          ))}
      </section>

      <div className="mb-40">
        <button className="flex items-center mx-auto bg-black text-white text-sm px-3 py-2 rounded-full">
          Load More <FaAngleRight className="ml-2" />
        </button>
      </div>
    </Container>
  );
};

export default FlashSale;
