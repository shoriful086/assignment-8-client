import Banner from "@/components/Home/Banner/Banner";
import FlashSale from "@/components/Home/FlashSale/FlashSale";
import PopularProduct from "@/components/Home/PopularProduct/PopularProduct";
import TopCategory from "@/components/Home/TopCategory/TopCategory";
import Container from "@/components/container/Container";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <TopCategory />
      <PopularProduct />
    </div>
  );
};

export default HomePage;
