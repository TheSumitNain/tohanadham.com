import React from "react";
import { Icon } from "@iconify/react";
import {Link} from "react-router-dom";

const Contact = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <div className="container-fluid bg-secondary-subtle pb-5 mt-5">
        <div class="row px-3">
          <div class="col-12 col-md-6 col-lg-6 pt-5">
            <h4 class="mycolor">Address:</h4>
            <br />
            <span class="col-lg-4 col-md-12 col-12 text-secondary">    
                  श्री बालाजी धाम टोहाना में आप किसी भी मंगलवार और शनिवार को किसी भी समय दर्शन करने को आ सकते हैं |
                  यदि आप पहली बार आ रहे हों तो एक बार नीचे दिए गए नंबर पर फोन कर लें |
            </span> <br />

            <span class="number col-lg-5 col-md-12 col-sm-12 col-12 text-secondary text-center">
              <br /> Location <br />
              <a class="mycolor">
                <Icon
                  icon="tabler:location-filled"
                  style={{ fontSize: "25px" }}
                /> 
                Near Shahi Bagh Marriage Place, <br /> Hisar road (Tohana)
                Haryana <br />
              </a>
            </span>

            <span class="number col-lg-4 col-md-12 col-sm-12 col-12 text-secondary text-center">
              <br /> Email Address <br />
              <a
                class="mycolor"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dhamtohana@gmail.com"
              >
                <Icon icon="mdi:email-check" style={{ fontSize: "26px" }} />
                dhamtohana@gmail.com
              </a>
            </span>
          </div>

          <div class="col-12 col-md-6 col-lg-3 pt-5">
            <h4 class="mycolor">Contact Us:</h4>
            <span class="number col-lg-4 col-md-12 col-sm-12 col-12 text-secondary text-center">
              <br /> Banta Ram Bhagat <br />
              <a class="mycolor" href="tel: +919036161000">
                <Icon
                  icon="fluent:call-connecting-20-filled"
                  style={{ fontSize: "25px" }}
                />
                +91 90361 61000 <br />
              </a>
            </span>

            <span class="number col-lg-4 col-md-12 col-sm-12 col-12 text-secondary text-center">
              <br /> Mandeep (Sonu) Ganghas <br />
              <a class="mycolor" href="tel: +919304900007">
                <Icon
                  icon="fluent:call-connecting-20-filled"
                  style={{ fontSize: "25px" }}
                />
                +91 93049 00007 <br />
              </a>
            </span>

            <span class="number col-lg-4 col-md-12 col-sm-12 col-12 text-secondary text-center">
              <br /> Kuldeep (Monu) Ganghas <br />
              <a class="mycolor" href="tel: +919206500003">
                <Icon
                  icon="fluent:call-connecting-20-filled"
                  style={{ fontSize: "25px" }}
                />
                +91 92065 00003 <br />
              </a>
            </span>
          </div>

          <div class="col-12 col-md-6 col-lg-3 pe-5 pt-5"> 
            <h4 class="mycolor">Other-links:</h4> <br />
            <div> 
             <Link class="mylink text-secondary" to="/">धाम का विवरण</Link>
             <Link class="mylink text-secondary" to="/events">यादगार पल</Link>
             <Link class="mylink text-secondary" to="/aarti">आरती व मंत्र</Link>
             <Link class="mylink text-secondary" to="/rules">नियम</Link>
             <Link class="mylink text-secondary" to="/reply">आपका अनुभव</Link>
            </div>
          </div>
          
        </div>
      </div>
      <footer class="border-top border-dark-subtle text-center bg-secondary-subtle pb-3">
        <span class="text-secondary">
          all copyright © {date} by -
          <a
            class="text-primary"
            style={{ fontSize: "18px" }}
            href="https://sumitnain.in"
          >
            sumitnain.in
          </a>
        </span>
      </footer>
    </>
  );
};

export default Contact;
