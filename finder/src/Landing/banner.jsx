import React from "react";

const gift = "https://media.giphy.com/media/k3CeSrt9IZ6aorWCy1/giphy.gif";

function Banner() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <img alt="" src={gift} />
      <div className="content">
        <h1>FINDER</h1>
        <p></p>
        <br></br>
        <p> Busca ese trabajo !!</p>

      </div>
    </div>
  );
}

export default Banner;
