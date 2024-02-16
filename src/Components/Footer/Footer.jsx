import { Component } from "react";

class Footer extends Component {
  render() {
    let follow = ["Pininterest", "Facebook", "Dribble"];
    let follow2 = ["Behance", "Twitter", "Youtube"];
    return (
      <div
        style={{
          backgroundColor: "#282828",
          color: "white",
          fontFamily: "Garamond",
        }}
      >
        <div className="d-flex" style={{ paddingTop: 50, paddingBottom: 30 }}>
          <div className="w-50" style={{ textAlign: "center" }}>
            <h3>FOLLOW US</h3>

            <div
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "left",
                marginTop: 30,
              }}
            >
              <div className="w-25">
                {follow.map((e, i) => {
                  return (
                    <div key={i}>
                      <h5>{e}</h5>
                    </div>
                  );
                })}
              </div>

              <div>
                {follow2.map((e, i) => {
                  return (
                    <div key={i}>
                      <h5>{e}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h3>CONTACT</h3>

            <div style={{ marginTop: 30 }}>
              <h5>RBDA Business center</h5>
              <h5>12 Fifth Avenue, Assam, AS 10160</h5>
              <h5>887-666-8510</h5>
              <h5>rbdabusiness@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
