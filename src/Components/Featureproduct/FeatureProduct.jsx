import { Component } from "react";
import { NavLink } from "react-router-dom";
import { APIData } from "../../Context/APIContext";
import Loader from "../Loader";

class FeatureProduct extends Component {
  static contextType = APIData;

  getFirstItemFromEachCategory(array) {
    const firstItems = {};

    return array?.reduce((accumulator, item) => {
      const category = item.category;

      if (!firstItems[category]) {
        firstItems[category] = true;
        accumulator.push(item);
      }

      return accumulator;
    }, []);
  }

  render() {
    let { productList, isLoading } = this.context;

    if (isLoading) return <Loader />;

    this.firstItemsFromEachCategory =
      this.getFirstItemFromEachCategory(productList);

    return (
      <div className="row" style={{ marginTop: 50, justifyContent: "center" }}>
        <h5 style={{ marginLeft: 50 }}>SHOP BY CATEGORY</h5>

        {this.firstItemsFromEachCategory?.map((elem, i) => {
          let { id, price, image, category } = elem;

          return (
            <div
              style={{ width: 300, marginBottom: 50, marginTop: 20 }}
              key={id + i}
            >
              <div
                className="card"
                style={{ height: 400, alignItems: "center" }}
              >
                <img
                  src={image}
                  width={200}
                  height={200}
                  style={{ marginTop: 10 }}
                />
                <div className="card-body">
                  <h6 className="card-title">{category}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">$ {price}</h6>
                  <br />
                  <NavLink to={`/${category}`} className="btn btn-primary">
                    Shop by Category
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FeatureProduct;
