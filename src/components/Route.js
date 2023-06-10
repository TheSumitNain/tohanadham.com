import React from "react";

const Route = () => {
  return (
    <>
      <div class="container">
        <h3 class="text-center mycolor pb-3 pt-5">धाम में आने के मार्ग</h3>
        <div className="row d-flex justify-content-center mb-3">
          <hr class="col-6 col-sm-4 col-md-3 col-lg-3" />
        </div>
        <div class="row">
          <p align="justify" class="text-light-emphasis col-12 col-md-12 col-lg-6">
            यदि आप ट्रेन के माध्यम से आना चाहते है टोहाना रेलवे स्टेशन से ही
            सीधे धाम आ सकते है व् यदि कोई ट्रैन टोहाना नही रूकती तो आप नजदीकी
            जंक्शन जाखल या नरवाना रेलवे स्टेशन पर उतर सकते है जोकि लगभग 20 या 30
            किoमीo की दुरी पर है | <br /> <br />
            यदि आप बस से आना चाहते हो टोहाना धाम हिसार से लगभग 75 कीoमीo, फतेहाबाद
            से 60 किoमीo, रोहतक से 135 किoमीo व पटियाला से 93 किoमीo की दुरी पर
            स्थित है व अन्य मार्गों से टोहाना के लिए बस की सेवाएं संचलित है |
          </p>
          <iframe
            class="mymap col-12 col-md-12 col-lg-6"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.9948526882445!2d75.91034478658344!3d29.690928909386727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391197fe3cb883e9%3A0x7683985b302d414b!2zU2Fua2F0IE1vY2hhbiBCYWxhamkgRGFyYmFyL0RoYW0gVG9oYW5hIOCkuOCkguCkleCknyDgpK7gpYvgpJrgpKgg4KSs4KS-4KSy4KS-4KSc4KWAIOCkpuCksOCkrOCkvuCksC_gpKfgpL7gpK4g4KSf4KWL4KS54KS-4KSo4KS-!5e0!3m2!1sen!2sin!4v1674988789309!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Route;
