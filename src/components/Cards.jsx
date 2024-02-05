import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <div className="row" style={{ paddingLeft: "5vmax", width: "100vw" }}>
        <div className="col services_head position-relative">
          <h5 className="fw-semibold m-0">Our Companies :-</h5>
          <h2 className="fw-bold mt-2">Some of Our Best Ventures</h2>
        </div>
      </div>
      <div
        className="cards position-relative d-md-flex align-items-center justify-content-center px-5 pb-5"
        style={{ gap: "7vmax" }}
      >
        <div className="card_line d-md-block d-none"></div>

        <div className="cards_main d-flex justify-content-center mb-md-0 mb-5">
          <div className="card2 position-relative">
            <div className="card2_border"></div>
            <div
              className="card_inner"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
            <p className="fw-bold mb-2 mt-3 text-center">Saiphia Casting</p>
            <Link
              to="https://saiphia-casting.netlify.app/"
              className="text-decoration-none"
            >
              <button className="rounded-4 d-block mx-auto">
                Visit Website
              </button>
            </Link>
          </div>
        </div>

        <div className="cards_main d-flex justify-content-center mb-md-0 mb-5">
          <div className="card2 position-relative">
            <div className="card2_border"></div>
            <div
              className="card_inner"
              style={{
                backgroundImage:
                  "url('https://saiphia.com/wp-content/uploads/2020/05/buildings.jpg')",
              }}
            ></div>
            <p className="fw-bold mb-2 mt-3 text-center">Saiphia Technology</p>
            <Link
              to="https://saiphia-technology.netlify.app/"
              className="text-decoration-none"
            >
              <button className="rounded-4 d-block mx-auto">
                Visit Website
              </button>
            </Link>
          </div>
        </div>

        <div className="cards_main d-flex justify-content-center mb-md-0 mb-5">
          <div className="card2 position-relative">
            <div className="card2_border"></div>
            <div
              className="card_inner"
              style={{
                backgroundImage:
                  "url('https://saiphia.com/wp-content/uploads/2020/06/rsz_technology.jpg')",
              }}
            ></div>
            <p className="fw-bold mb-2 mt-3 text-center">SaiphiaDus</p>
            <Link
              to="https://saiphiadus.netlify.app/"
              className="text-decoration-none"
            >
              <button className="rounded-4 d-block mx-auto">
                Visit Website
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
