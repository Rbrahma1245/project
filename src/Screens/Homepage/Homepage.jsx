import { Component } from "react";
import Banner from "../../Components/Carousel/Banner";
import FeatureProduct from "../../Components/Featureproduct/FeatureProduct";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <FeatureProduct />
      </div>
    );
  }
}

export default Homepage;
