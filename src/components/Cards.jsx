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
      <div
        className="cards position-relative d-flex align-items-center justify-content-center px-5"
        style={{ gap: "10vmax" }}
      >
        <div className="card_line"></div>
        <div className="card_cus">
          <div
            className="card_cu shadow d-flex align-items-center justify-content-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="cards_overlay flex-column">
              <p className="fw-bold mb-3 text-white">Saiphia Casting</p>
              <button className="rounded-4">Visit Website</button>
            </div>
          </div>
        </div>
        <div className="card_cus">
          <div
            className="card_cu shadow d-flex align-items-center justify-content-center"
            style={{
              backgroundImage:
                "url('https://saiphia.com/wp-content/uploads/2020/05/buildings.jpg')",
            }}
          >
            <div className="cards_overlay flex-column">
              <p className="fw-bold mb-3 text-white">Saiphia Technology</p>
              <button className="rounded-4">Visit Website</button>
            </div>
          </div>
        </div>
        <div className="card_cus">
          <div
            className="card_cu shadow d-flex align-items-center justify-content-center"
            style={{
              backgroundImage:
                "url('https://saiphia.com/wp-content/uploads/2020/06/rsz_technology.jpg')",
            }}
          >
            <div className="cards_overlay flex-column">
              <p className="fw-bold mb-3 text-white">SaiphiaDus</p>
              <button className="rounded-4">Visit Website</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
