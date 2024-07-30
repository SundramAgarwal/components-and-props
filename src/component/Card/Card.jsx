import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  console.log(props.data.name);
  return (
    <>
      <section className="card container">
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
          <section className="contact">
            <button className="call btn">Call</button>
            <button className="msg btn">Message</button>
          </section>
          <section className="status">
            <div>
              <i className="fa-solid fa-phone"></i>
              <p>{props.data.called}</p>
            </div>
            <div>
              <i className="fa-solid fa-message"></i>
              <p>{props.data.messaged}</p>
            </div>
            <div>
              <i className="fa-solid fa-share"></i>
              <p>{props.data.shared}</p>
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
