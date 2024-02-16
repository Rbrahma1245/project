import { Component } from "react";
import { NavLink } from "react-router-dom";

class Card extends Component {
  render() {
    let { id, title, price, image } = this.props.elem
  

    return (
      <div style={{ width: 400, marginBottom: 50 }}>
        <div className="card" style={{ height: 400, alignItems: "center" }}>
          <img src={image} width={200} height={200} />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <h6 className="card-subtitle mb-2 text-muted">$ {price}</h6>
            <br />
            <NavLink to={`/product/${id}`} className="btn btn-primary">
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
