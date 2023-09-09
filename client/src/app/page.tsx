import Banner from "./components/Banner";
import Section from "./components/Section";
import TodayDeal from "./components/TodayDeal";
import {BannerData, ProductNavigationData} from './data'
import Carousel from "./components/Cara";
import ProductNavigation from "./components/ProductNav";

const Home = () => {
  return (
    <>
    <Carousel/>
      {/* <Banner
        image={BannerData.image}
        heading={BannerData.heading}
        subHeading={BannerData.subHeading}
        callToAction={BannerData.callToAction}
      /> */}
      <TodayDeal />
      <ProductNavigation categories={ProductNavigationData}/>
      <Section />
    </>
  );
};
export default Home;
