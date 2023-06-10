import React from "react";
import Photo from "./Photo";

const Events = () => {
  return (
    <>
      <div class="container-fluid mt-5">
        <h2 class="text-center mycolor pt-5">
          हाल ही में हुए कार्यक्रम  <br />

        </h2>
        <div className="d-flex justify-content-center">
          <hr class="col-6 col-sm-4 col-md-3 col-lg-3 pb-3" />
        </div>

        <div class="row youtube mt-1 gy-5">
          <iframe
            class="youtube_video col-lg-4 col-md-4 col-sm-6 col-12"
            src="https://www.youtube.com/embed/s1J7KSzaFrk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            class="youtube_video col-lg-4 col-md-4 col-sm-6 col-12"
            src="https://www.youtube.com/embed/Ct7STZm6CVg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
          <iframe
            class="youtube_video col-lg-4 col-md-4 col-sm-6 col-12"
            src="https://www.youtube.com/embed/wx26kALcX4s"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          
        </div>
        
        <div class="d-flex flex-row-reverse me-4"> 
        <a href="https://www.youtube.com/@TohanaDham" class="btn submit">Watch More</a>
        </div>
      </div>
      <Photo />
    </>
  );
};

export default Events;
