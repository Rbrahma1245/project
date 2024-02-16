import { Component } from "react";
import Card from "../../Components/Card";
import { APIData } from "../../Context/APIContext";
import Loader from "../../Components/Loader";
import Pagination from "../../Components/Pagination";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      itemsPerPage: 6,
    };
  }
  static contextType = APIData;

  handlePageChange = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    let { productList, isLoading } = this.context;
    const { currentPage, itemsPerPage } = this.state;

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productList?.slice(indexOfFirstItem, indexOfLastItem);

    // Render your items for the current page
    const renderItems = currentItems?.map((elem, i) => (
      <Card elem={elem} key={elem.id + i} />
    ));

    if (isLoading) return <Loader />;

    return (
      <div style={{ marginTop: 30 }}>
        <div
          className="row "
          style={{ marginTop: 10, justifyContent: "center" }}
        >
          {renderItems}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(productList?.length / itemsPerPage)}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Product;
