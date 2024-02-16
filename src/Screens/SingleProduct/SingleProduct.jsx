/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { APIData } from "../../Context/APIContext";
import Loader from "../../Components/Loader";
import { NavLink } from "react-router-dom";
import withRouter from "../../Components/WithRouter";

export class SingleProduct extends Component {
  static contextType = APIData;

  render() {
    let { productList, isLoading } = this.context;
    let productId = this.props.params.productId;

    let singleProduct = productList?.find((e) => e.id == productId);

    if (isLoading) return <Loader />;

    return (
      <div>
        <NavLink style={{ marginLeft: 50 }} to="/product">
          Back
        </NavLink>
        <div
          className="card "
          style={{
            height: 400,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "60%", textAlign: "center" }}>
            <img src={singleProduct?.image} width={200} height={200} />
          </div>

          <div className="card-body" style={{ marginRight: "6rem" }}>
            <h6 className="card-title">{singleProduct?.title}</h6>
            <h6 className="card-subtitle mb-2 text-muted">
              $ {singleProduct?.price}
            </h6>
            <p>{singleProduct?.description}</p>
            <br />

            <NavLink to={`/product/${productId}/card`}>ADD TO CART</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleProduct);
