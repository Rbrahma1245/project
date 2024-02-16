/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import Loader from "../../Components/Loader";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card";
import withRouter from "../../Components/WithRouter";
import { APIData } from "../../Context/APIContext";

class Categories extends Component {
  static contextType = APIData;

  render() {
    let { productList, isLoading } = this.context;
    let category = this.props.params.category;

    if (isLoading) return <Loader />;

    let categories = productList?.filter((e) => e.category == category);

    return (
      <div style={{ marginTop: 30 }}>
        <NavLink style={{ marginLeft: 50 }} to="/">
          Back
        </NavLink>
        <div className="d-flex ">
          <div
            className="row "
            style={{ marginTop: 10, justifyContent: "center" }}
          >
            {categories?.map((elem, i) => (
              <Card elem={elem} key={elem.id + i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Categories);
