import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaAngleRight,
  FaHeadset,
  FaQuestionCircle,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="testmain">
      <Row>
        <Col md={4} style={{ marginTop: 20 }}>
          <Card className="card1test rounded-4 shadow">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: 40,
                  width: 5,
                  backgroundColor: "#44CE30",
                  marginTop: 20,
                }}
              ></div>
              <h3 style={{ marginTop: 30, marginLeft: 10, fontWeight: 500 }}>
                Need Help?
              </h3>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000" }}
            >
              <Card className="whatsappcard rounded-4 shadow">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <FaWhatsapp size={30} style={{ color: "#44CE30" }} />
                  <div style={{ marginLeft: "20px", width: "100%" }}>
                    <h6
                      className="text-decoration-none"
                      style={{ fontWeight: 600, marginTop: 15 }}
                    >
                      Ask us on Whatsapp!
                    </h6>
                    <p style={{ fontSize: 14 }}>
                      Get instant support via expert
                    </p>
                  </div>
                  <div>
                    <FaAngleRight size={25} style={{ textAlign: "right" }} />
                  </div>
                </div>
              </Card>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000" }}
            >
              <Card className="whatsappcard rounded-4 shadow">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <FaHeadset size={35} style={{ color: "#44CE30" }} />
                  <div style={{ marginLeft: "20px", width: "100%" }}>
                    <h6
                      style={{
                        fontWeight: 600,
                        marginTop: 15,
                        textDecoration: "none",
                      }}
                    >
                      Ask us on Video Call
                    </h6>
                    <p style={{ fontSize: 14 }}>
                      Connect instantly with our team and see the products live
                      over a video call{" "}
                    </p>
                  </div>
                  <div>
                    <FaAngleRight size={25} style={{ textAlign: "right" }} />
                  </div>
                </div>
              </Card>
            </a>
            <Row>
              <Col>
                <a href="#" target="_blank" style={{ color: "#000" }}>
                  <Card className="whatsappcard rounded-4 shadow">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <FaRegEnvelope size={35} style={{ color: "#44CE30" }} />
                      <div style={{ marginLeft: "20px", width: "100%" }}>
                        <h6
                          style={{
                            fontWeight: 600,
                            marginTop: 15,
                            fontSize: 15,
                          }}
                        >
                          Mail us
                        </h6>
                      </div>
                    </div>
                  </Card>
                </a>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={8} style={{ marginTop: 20 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.20458457714!2d77.41241027407968!3d23.162732111085514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c430c16474287%3A0x62f02df2a7deaa15!2sSaiphia%20Technology!5e0!3m2!1sen!2sin!4v1705758631344!5m2!1sen!2sin"
            width="100%"
            height="510"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
