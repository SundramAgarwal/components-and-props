import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  console.log(props.data.name);
  return (
    <>
      <section className="container">
        <div className="upper">
          <div className="img-container">
            <div className="img-body"></div>
          </div>
        </div>
        <div className="lower">
          <section className="name">{props.data.name}</section>
          <section className="desg">{props.data.designation}</section>
          <section className="social-icons">
            <a href="https://www.youtube.com/watch?v=7fdpzXeXbcE">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=7fdpzXeXbcE">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=7fdpzXeXbcE">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=7fdpzXeXbcE">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </section>
          <section className="row w-75 justify-content-evenly">
            <button className="btn btn-primary rounded d-flex align-items-center justify-content-center">Call</button>
            <button className="btn btn-primary rounded d-flex align-items-center justify-content-center">Message</button>
          </section>
          <section className="row row-cols-3">
            <div className="col d-flex align-items-center gap-2">
              <i className="fa-solid fa-phone"></i>
              <span>{props.data.called}</span>
            </div>
            <div className="col d-flex align-items-center gap-2">
              <i className="fa-solid fa-message"></i>
              <span>{props.data.messaged}</span>
            </div>
            <div className="col d-flex align-items-center gap-2">
              <i className="fa-solid fa-share"></i>
              <span>{props.data.shared}</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  designation: PropTypes.string,
  called: PropTypes.string,
  messaged: PropTypes.string,
  shared: PropTypes.string,
};
Card.defaultProps = {
  name: "Guest",
  designation: "Unknown",
  called: "0",
  messaged: "0",
  shared: "0",
};

export default Card;
