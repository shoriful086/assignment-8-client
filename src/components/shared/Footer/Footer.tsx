import Container from "@/components/container/Container";
import Image from "next/image";

const sponsoredItems = [
  {
    id: 1,
    image: "https://pngimg.com/uploads/google/google_PNG102344.png",
  },
  {
    id: 2,
    image: "https://logospng.org/download/yahoo/logo-yahoo-4096.png",
  },
  {
    id: 3,
    image:
      "https://www.edigitalagency.com.au/wp-content/uploads/Spotify_Logo-png-RGB-Green.png",
  },
  {
    id: 4,
    image: "https://download.logo.wine/logo/Netlify/Netlify-Logo.wine.png",
  },
  {
    id: 5,
    image: "https://img.aozaki.cc/20210820/0001.png",
  },
];

const Footer = () => {
  return (
    <section>
      <section className="bg-gray-200 ">
        <Container>
          <div className=" grid grid-cols-5 mx-auto justify-center items-center gap-8 ">
            {sponsoredItems.map((item) => (
              <Image
                className="mx-auto "
                key={item.id}
                src={item.image}
                height={80}
                width={80}
                alt="sponsored img"
              />
            ))}
          </div>
        </Container>
      </section>

      <footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </nav>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Apps</h6>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
