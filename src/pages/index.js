import React from "react";

import MainLayout from "../components/layout";
import SEO from "../components/seo";
import HEROSECTION from "../components/index/Herosection";
import PRODUCTS from "../components/index/Products";
import POSTS from "../components/index/LoadmorePost";
import FREETEXT from "../components/index/Freetext";
import SLIDERPRODUCT from "../components/index/ProductSlider"

const IndexPage = () => (
  <MainLayout>
    <SEO/>
    <HEROSECTION/>
    <SLIDERPRODUCT/>
    <PRODUCTS/>
    <POSTS limit={4}/>
    <FREETEXT/>
    <POSTS limit={4} skip={4} loadMore />
  </MainLayout>
)

export default IndexPage;
