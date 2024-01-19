import React from "react";

const About = () => {
  return (
    <section className="b-welcome section-default">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 text-slogan">
            <div className="ui-title-slogan">- Since 2004 -</div>
            <h2 className="ui-title fw-bold">we are committed to ensure</h2>
            <h3 className="ui-title title-decore"> client satisfaction !</h3>
            <p>
              {" "}
              We, Saiphia Group, follow standard operating procedures executing
              and delivering our services to our esteemed clients. Our
              experienced team are highly motivated and committed to perform the
              tasks as per the client’s expectation. Our consultants have great
              exposure incorporating new trends available in the market while
              providing support to our esteemed clients. Write us your
              requirement with respect to our wide-range of expert services.
            </p>
            <p>
              We, Saiphia Group, follow standard operating procedures executing
              and delivering our services to our esteemed clients. Our
              experienced team are highly motivated and committed to perform the
              tasks as per the client’s expectation. Our consultants have great
              exposure incorporating new trends available in the market while
              providing support to our esteemed clients. Write us your
              requirement with respect to our wide-range of expert services.
            </p>
            <blockquote>
              Helping peoples making their trip adventerous!
              <br />
              Aut atque ipsum sed libero saepe et eligendi facilis.
            </blockquote>
            <hr />
            {/* <img src="https://pro-theme.com/html/rvhero/assets/media/content/b-welcome/bg-1.jpg" alt="sign" /> */}
          </div>
          <div className="col-xl-6">
            <img
              className="home-welcome"
              src="https://pro-theme.com/html/rvhero/assets/media/content/b-welcome/bg-1.jpg"
              alt="welcome"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
