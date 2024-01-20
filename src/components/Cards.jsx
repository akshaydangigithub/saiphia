import React from "react";

const Cards = () => {
  return (
    <>
      <div className="row" style={{ paddingLeft: "5vmax" }}>
        <div className="col services_head position-relative">
          <h5 className="fw-semibold m-0">Our Companies :-</h5>
          <h2 className="fw-bold mt-2">Some of Our Best Ventures</h2>
        </div>
      </div>
      <div className="cards d-flex align-items-center justify-content-center px-5" style={{gap:"10vmax"}}>
        <div className="card_cu shadow d-flex align-items-center justify-content-center">
          <div className="cards_overlay">
            <button>Visit Website</button>
          </div>
        </div>
        <div className="card_cu shadow d-flex align-items-center justify-content-center">
          <div className="cards_overlay">
            <button>Visit Website</button>
          </div>
        </div>
        <div className="card_cu shadow d-flex align-items-center justify-content-center">
          <div className="cards_overlay">
            <button>Visit Website</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
