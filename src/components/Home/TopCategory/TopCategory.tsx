import Container from "@/components/container/Container";
import Image from "next/image";
import Link from "next/link";

const categoryItem = [
  {
    id: 1,
    image: "https://www.hangseven.com/wp-content/uploads/2020/05/scotch03.jpg",
    category: "Dish Scouring Pads",
  },
  {
    id: 2,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fdish-clipart-dish-detergent-6.png&f=1&nofb=1&ipt=125d16f1a544364d49455810476a15b10cbfed5d6a45565c7cb5f91f99bf6905&ipo=images",
    category: "Dish Shop",
  },
  {
    id: 3,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Feaa477a1-037a-4db9-9d29-3141b04aad4c_1.bc5114c614c71999834f7c753448e467.png&f=1&nofb=1&ipt=90c352f849320d5c21fb76abbd648e0587eb9753d479192c76fb2f294f520ee5&ipo=images",
    category: "Dishwasher Detergent",
  },
  {
    id: 4,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.berwickcare.co.uk%2Fpub%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F8f81ad763dec5931a467d41b59b7bf73%2Fc%2Fa%2Fcadw_10l_rinse_aid_lts_.png&f=1&nofb=1&ipt=e76d514ae484a1c7de76d1e214fdb842b371ca1ccb627c07ba097960a5fb1a33&ipo=images",
    category: "Dishwasher Rinse Aids",
  },
];

const TopCategory = () => {
  return (
    <div className="bg-white py-10">
      <Container>
        <section className=" mb-10">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-2xl font-medium">Top Categories</h1>
            <p className="max-w-[70ch] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              eligendi tenetur deserunt quas dolores facilis ab officia aperiam
              distinctio assumenda.
            </p>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
            {categoryItem.map((item, index) => (
              <div
                key={item.id}
                className={`relative bg-gray-300 cursor-pointer rounded-lg overflow-hidden shadow-lg 
              ${
                index === 1 || index === 3
                  ? "lg:row-span-2 h-44 lg:h-[420px] w-full"
                  : "lg:row-span-1 h-44 lg:h-[200px]"
              }
               ${index === 1 ? "lg:row-start-1" : ""} 
               ${index === 2 ? "lg:row-start-2" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.category}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-lg font-bold text-white text-center">
                    {item.category}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="w-28 mx-auto text-center border border-orange-500 text-orange-500 rounded px-3 py-1 mt-10">
            <Link href="/dishwashing-items">View All</Link>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default TopCategory;
