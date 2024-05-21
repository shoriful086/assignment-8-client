import Container from "@/components/container/Container";
import Card from "@/components/ui/Card/Card";
import { TProductCard } from "@/types/productCard.type";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch(
    "https://assignment-8-server-im7o0htlt-shoriful-islams-projects.vercel.app/api/v1/products",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <Container>
      <div className="my-20">
        {/* title section  */}
        <section className="px-4">
          <div className="flex justify-between items-center mb-4 lg:p-0">
            <h1 className="text-2xl font-medium">Flash Sale</h1>
            <Link
              className="border border-orange-500 rounded text-orange-500 px-3 py-1"
              href="/flash-sale"
            >
              View All
            </Link>
          </div>
        </section>

        {/* card section  */}

        <section className="px-4">
          <div className="flex items-center ">
            <h1>Sale on now </h1>
            <p className="ml-10  p-2 rounded">
              Ending in{" "}
              <span className="bg-orange-500 text-white text-lg p-2">
                10:40h
              </span>
            </p>
          </div>

          <hr className="border-1 border-yellow-300 mt-4 mb-6" />

          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:p-0">
            {data?.data
              .slice(0, 4)
              .filter((product: TProductCard) => product.flashSale === true)
              .map((product: TProductCard) => (
                <Card key={product._id} product={product} />
              ))}
          </div>
        </section>
      </div>
    </Container>
  );
};

export default FlashSale;
