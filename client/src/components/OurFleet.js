import React from "react";
import "./assets/css/News-Cards.css"
import ia320 from "./assets/img/A320.png";
import ia380 from "./assets/img/A380.png";
import ib737 from "./assets/img/B737.png";
import ib757 from "./assets/img/B757.png";


function OurFleet(){


    return(
        <div>
            <div style = {{"margin-top":"2px",}}>
        <div class="row" style = {{"margin":"10px",}}>
            <div class="col col-sm-3"><figure class="snip1527">
  <div class="image"><img src={ib737} alt="pr-sample23" /></div>
  <figcaption>
    <div class="date"><span class="day">Airbus</span><span class="month">A380</span></div>
    <h3 style = {{"margin-top":"5px",}}>3 Boeing 737</h3>
    <p style = {{"height":"100px",}}>

    The Boeing 737 is a narrow-body aircraft produced by Boeing at its Renton Factory in Washington. Developed to supplement the Boeing 727 on short and thin routes.
    </p>
  </figcaption>
  <a href="#"></a>
</figure></div>
            <div class="col col-sm-3"><figure class="snip1527">
  <div class="image"><img src={ib757} alt="pr-sample23" /></div>
  <figcaption>
    <div class="date"><span class="day">Airbus</span><span class="month">A380</span></div>
    <h3  style = {{"margin-top":"5px",}} >4 Boeing 757</h3>
    <p style = {{"height":"100px",}}>

    The Boeing 757 is an American narrow-body airliner designed and built by Boeing Commercial Airplanes. The then-named 7N7, a twinjet successor for the 727, received its first orders in August 1978.
    </p>
  </figcaption>
  <a href="#"></a>
</figure></div>
            <div class="col col-sm-3"><figure class="snip1527">
  <div class="image"><img src={ia320} alt="pr-sample23" /></div>
  <figcaption>
    <div class="date"><span class="day">Airbus</span><span class="month">A320</span></div>
    <h3  style = {{"margin-top":"5px",}} >1 Airbus A320</h3>
    <p style = {{"height":"100px",}}>

      The Airbus A320 family is a series of narrow-body airliners developed and produced by Airbus. The A320 was launched in March 1984, first flew on 22 February 1987, and was introduced in April 1988 by Air France.
    </p>
  </figcaption>
  <a href="#"></a>
</figure></div>
            <div class="col col-sm-3"><figure class="snip1527">
  <div class="image"><img src={ia380} alt="pr-sample23" /></div>
  <figcaption>
    <div class="date"><span class="day">Airbus</span><span class="month">A380</span></div>
    <h3  style = {{"margin-top":"5px",}} >1 Airbus A380</h3>
    <p style = {{"height":"100px",}}>

      The Airbus A380 is a large wide-body airliner that was developed and produced by Airbus. It is the world's largest passenger airliner and only full-length double-deck jet airliner. 
    </p>
  </figcaption>
  <a href="#"></a>
</figure></div>
        </div>
    </div>

        </div>
    );
}

export default OurFleet;