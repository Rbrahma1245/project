/* eslint-disable react/prop-types */
import { Component } from "react";

class Pagination extends Component {
  render() {
    const { currentPage, totalPages, onPageChange } = this.props;
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: 50 }}
      >
        {pageNumbers?.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            style={{
              cursor: "pointer",
              marginRight: "5px",
              padding: "4px 16px",
              borderRadius: "4px",
              border:"none",
              background: currentPage === number ? "#535C91" : "none",
              outline: "none",
            }}
          >
            {number}
          </button>
        ))}
      </div>
    );
  }
}
export default Pagination;
