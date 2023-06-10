import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import pic from "../images/h3.jpg";
import pic1 from "../images/p1.jpg";
import pic2 from "../images/p2.jpg";
import pic3 from "../images/p3.jpg";
import pic4 from "../images/p4.jpg";
import pic5 from "../images/p5.jpg";
import pic6 from "../images/p6.jpg";
import pic7 from "../images/p7.jpg";
import pic8 from "../images/p8.jpg";
import pic9 from "../images/p9.jpg";
import pic10 from "../images/p10.jpg";

const Photo = () => {
  const [state, setState] = useState(window.screen.width);

  const actualSize = () => {
    setState(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualSize);
  });

  let data2;
  if (state <= 450) {
    data2 = 1;
  } else if (state<=768) {
    data2 = 2;
  } else {
    data2 = 3;
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: data2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <>
      <div className="slide">
      <h2 class="text-center mycolor mt-5 mb-3"> कुछ यादगार पल </h2>
        <div className="row d-flex justify-content-center mb-3">
        <hr class="col-6 col-sm-4 col-md-4 col-lg-4" />
        </div>
        <Slider {...settings}>

          <div className="pic">
            <img className="" src={pic3} alt="pic" />
          </div>
          <div className="pic">
            <img className="" src={pic4} alt="pic" />
          </div>
   
          <div className="pic">
            <img className="" src={pic6} alt="pic" />
          </div>
          <div className="pic">
            <img className="" src={pic7} alt="pic" />
          </div>
          <div className="pic">
            <img className="" src={pic8} alt="pic" />
          </div>
          <div className="pic">
            <img className="" src={pic9} alt="pic" />
          </div>
          <div className="pic">
            <img className="" src={pic10} alt="pic" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Photo;
