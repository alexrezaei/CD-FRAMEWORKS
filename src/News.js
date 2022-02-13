import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Buttons from "./components/Buttons.js";
import Cards from "./components/Cards.js";
function News() {
  return (
    <div className="container news">
      <div className="container">
        <div className="column">
          <div className="col">
            <Buttons></Buttons>
          </div>
          <div className="col">
            <Cards></Cards>
          </div>
          <div className="col">
            <Buttons></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
