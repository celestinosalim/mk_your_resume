import React, { Component } from "react";
import homepage from "./css/image/homepage.jpg";

class Home extends Component {
  render() {
    let imageStyle = {
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      height: "940px",
      width: "1680px",
      flex: 1,
      position: "relative"
    };

    let text = {
      textAlign: "center",
      position: "absolute",
      top: "470px",
      width: "100%",
      color: "black"
    };

    return (
      <div>
        <div>
          <img
            src="https://webprintmore.com/wp-content/uploads/2017/08/4214905-background-images-for-websites.jpg"
            alt=""
            style={imageStyle}
          />
        </div>
        <div style={text}>
          <h1>Welcome to Visual Resume</h1>
          <h3>Create a profesional and interactive resume in under 10 min.</h3>
        </div>
      </div>
    );
  }
}

export default Home;
