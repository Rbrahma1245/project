/* eslint-disable react/prop-types */
import axios from "axios";
import { Component, createContext } from "react";

export let APIData = createContext();

export class APIContext extends Component {
  constructor() {
    super();
    this.state = {
      productList: null,
      isLoading: false,
    };
  }

  fetchProduct = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      this.setState({ productList: data });
    } catch (error) {
      console.log(error);
    }
    this.setState({ isLoading: false });
  };

  componentDidMount() {
    this.fetchProduct();
  }

  render() {
    return (
      <APIData.Provider value={this.state}>
        {this.props.children}
      </APIData.Provider>
    );
  }
}

export default APIContext;
