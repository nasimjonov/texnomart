import React from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import { DATA } from "../../static/Index";
import Deliver from '../../components/deliver/Deliver';
import Footer from "../../components/footer/Footer";
import BottomMain from '../../components/bottomMain/BottomMain';

function Home() {
  return (
    <div>
      <Banner />
      <Product data={DATA} />
      <BottomMain />
      <Deliver/>
     <Footer />
    </div>
  );
}
export default Home;
