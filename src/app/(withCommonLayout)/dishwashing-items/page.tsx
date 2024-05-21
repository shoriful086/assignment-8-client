import FilterProduct from "@/components/ProductPage/FilterProduct";
import Container from "@/components/container/Container";

const AllProductsPage = async () => {
  const res = await fetch(
    "https://assignment-8-server-im7o0htlt-shoriful-islams-projects.vercel.app/api/v1/products",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <Container>
      <div className="mb-20">
        <FilterProduct products={data?.data} />
      </div>
    </Container>
  );
};

export default AllProductsPage;
