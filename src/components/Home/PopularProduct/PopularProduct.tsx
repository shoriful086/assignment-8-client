import Container from "@/components/container/Container";
import Card from "@/components/ui/Card/Card";
import TopRatedProductCard from "@/components/ui/Card/TopRatedProductCard";
import { TProductCard } from "@/types/productCard.type";
import Link from "next/link";

const PopularProduct = async () => {
  const res = await fetch(
    "https://assignment-8-server-im7o0htlt-shoriful-islams-projects.vercel.app/api/v1/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();

  return (
    <Container>
      <div className="my-10 ">
        <section className=" flex justify-between items-center p-4 lg:p-0">
          <div className="flex flex-col justify-between mb-10">
            <h1 className="text-2xl mt-10 lg:mb-2">Most Popular Product</h1>
            <p className="max-w-[40ch] hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio sint iusto nisi officiis ad possimus?
            </p>
          </div>

          <div>
            <Link
              className="border border-orange-500 rounded text-orange-500 px-3 py-1"
              href="/dishwashing-items"
            >
              View All
            </Link>
          </div>
        </section>

        <section>
          <div className="bg-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 lg:p-6">
            {data?.data
              .filter(
                (product: TProductCard) =>
                  product.ratings === 4.3 ||
                  product.ratings === 4.4 ||
                  product.ratings === 4.6 ||
                  product.ratings === 4.7
              )
              .map((product: TProductCard) => (
                <TopRatedProductCard key={product._id} product={product} />
              ))}
          </div>
        </section>
      </div>
    </Container>
  );
};

export default PopularProduct;
