import Banner from "./components/Banner";
import Section from "./components/Section";

const Home = () => {
  const products = [
    {
      electronics: [
        {
          heading: "Monitors",
          price: "From $49",
          brand: "acer",
          image:
            "https://rukminim2.flixcart.com/image/200/200/xif0q/monitor/9/x/a/-original-imagsatb6cbghctx.jpeg?q=70",
        },
        {
          heading: "Monitors",
          price: "From $49",
          brand: "acer",
          image: [
            "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
          ],
        },
      ],
      camera: [
        {
          heading: "Monitors",
          price: "From $49",
          brand: "acer",
          image:
            "https://rukminim2.flixcart.com/image/200/200/xif0q/monitor/9/x/a/-original-imagsatb6cbghctx.jpeg?q=70",
        },
        {
          heading: "Monitors",
          price: "From $49",
          brand: "acer",
          image: [
            "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Banner
        image={"/assets/headphones_b_1.webp"}
        heading={"Immerse Yourself in Sound Excellence!"}
        subHeading={"Discover the Ultimate Headphone Collection"}
        callToAction={"Show NOW"}
      />
      <h1>Today deal</h1>
      <h1>NAVVV</h1>
        <Section/>
        <Section/>
        <Section/>

    </>
  );
};
export default Home;
