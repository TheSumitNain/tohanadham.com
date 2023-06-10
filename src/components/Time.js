import React from 'react'
import p2 from "../images/p2.jpg";

const Time = () => {
  return (
      <>
        <div class="container-fluid">
        <h3 class="text-center mycolor pt-5">
         आने का समय
        </h3>
        <div className="d-flex justify-content-center">
        <hr class="col-6 col-sm-4 col-md-3 col-lg-3 pb-3" />
        </div>
        <div class="rules_list text-light-emphasis row d-flex"> 
            <img class="col-12 col-md-6 col-lg-6 shadow-lg" style={{height:"250px"}} src={p2} alt="pic" />  
           <p class="col-12 col-md-6 col-lg-6" align="justify" style={{letterSpacing: "2px"}}>
           श्री बालाजी धाम टोहाना में आप किसी भी मंगलवार और शनिवार को किसी भी समय दर्शन करने को आ सकते हैं |
           यदि आप पहली बार आ रहे हों तो एक बार नीचे दिए गए नंबर पर फोन कर लें |
           </p>
        </div>
        </div>
      </>
  )
}

export default Time;