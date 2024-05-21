import Container from "@/components/container/Container";
import BannerCarousel from "./Carousel";

const Banner = () => {
  return (
    <div className="bg-gray-200 h-[100%]">
      <Container>
        <section>
          <div className="text-center pt-20">
            <h1 className="text-xl lg:text-3xl font-semibold">
              Crafting Comfort, Rendering Spaces
            </h1>
            <h1 className="text-xl lg:text-3xl font-semibold">
              Your Home, Your Signature Style
            </h1>
            <p className="max-w-[60ch] mx-auto mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              saepe autem ad atque temporibus dolore voluptates ullam eaque
              magnam excepturi.
            </p>
          </div>
        </section>

        <section>
          <div className="lg:w-4/5 mx-auto p-10 text-center">
            <BannerCarousel />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Banner;
