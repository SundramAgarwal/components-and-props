import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import "./CenterMode.css";

const cardData = [
  {
    id: 1,
    name: "Er Sundram Agarwal",
    designation: "Software Engineer",
    called: "30k",
    messaged: "20k",
    shared: "10k",
  },
  {
    id: 2,
    name: "Er Sonu Shukla",
    designation: "Software Developer",
    called: "50k",
    messaged: "89k",
    shared: "12k",
  },
  {
    id: 3,
    name: "Ms Aarti Verma",
    designation: "UI/UX Designer",
    called: "25k",
    messaged: "15k",
    shared: "8k",
  },
  {
    id: 4,
    name: "Mr Ravi Kumar",
    designation: "Project Manager",
    called: "40k",
    messaged: "30k",
    shared: "20k",
  },
  {
    id: 5,
    name: "Ms Neha Patel",
    designation: "Data Scientist",
    called: "60k",
    messaged: "45k",
    shared: "30k",
  },
  {
    id: 6,
    name: "Mr Anil Sharma",
    designation: "System Analyst",
    called: "35k",
    messaged: "25k",
    shared: "18k",
  },
  {
    id: 7,
    name: "Ms Priya Rani",
    designation: "Business Analyst",
    called: "55k",
    messaged: "40k",
    shared: "25k",
  },
  {
    id: 8,
    name: "Mr Vikram Singh",
    designation: "DevOps Engineer",
    called: "70k",
    messaged: "50k",
    shared: "35k",
  },
  {
    id: 9,
    name: "Ms Shweta Dubey",
    designation: "Network Engineer",
    called: "45k",
    messaged: "35k",
    shared: "20k",
  },
  {
    id: 10,
    name: "Mr Ajay Kumar",
    designation: "QA Engineer",
    called: "30k",
    messaged: "25k",
    shared: "15k",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "none",
          border: "none",
        }}
      ></div>
      <i class="right-arrow fa-solid fa-caret-right" onClick={onClick}></i>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "none",
          border: "none",
        }}
      ></div>
      <i class="left-arrow fa-solid fa-caret-left" onClick={onClick}></i>
    </>
  );
}

function CenterMode() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className=" slider-container container-fluid">
      <Slider {...settings}>
        {cardData.map((data) => (
          <div>
            <Card key={data.id} data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
