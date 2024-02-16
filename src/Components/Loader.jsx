import { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export class Loader extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ClipLoader color="#36d7b7" />
      </div>
    );
  }
}

export default Loader;
