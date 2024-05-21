import Container from "@/components/container/Container";
import Image from "next/image";

const CategoriesPage = async () => {
  const res = await fetch(
    "https://assignment-8-server-im7o0htlt-shoriful-islams-projects.vercel.app/api/v1/products"
  );
  const data = await res.json();
  return (
    <Container>
      <div className="w-full h-[100%] mb-24">
        <h1 className="text-2xl mt-10 font-medium"> All Category Here</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-5 mt-10">
          {data?.data.map((item: any) => (
            <div className="shadow rounded-md" key={item._id}>
              <Image
                src={item.image}
                sizes="(max-width: 768px) 100vw, 
                 (max-width: 1024px) 50vw, 
                 25vw"
                height={0}
                width={0}
                alt="product image"
                className="size-24 mx-auto overflow-hidden"
              />
              <h1 className="text-center text-lg font-medium p-3">
                {item.category}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategoriesPage;
