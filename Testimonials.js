import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Lisa T. </h3>
            <h4>Enthusiast:</h4>
            <p>

   "As a car enthusiast, I'm very particular about who touches my ride. CAR HUB exceeded my expectations. Their attention to detail and craftsmanship are top-notch. I got a complete interior overhaul, and now my car feels like a luxury vehicle."
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Karen W.</h3>
            <h4>- Off-Road Adventure:</h4>
            <p>
            "I'm into off-roading, and I needed my 4x4 to be ready for any terrain. CAR HUB equipped my vehicle with all-terrain tires, a lift kit, and robust skid plates. Now, I can take on any trail with confidence."
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>John M.</h3>
            <h4>- Satisfied Customer:</h4>
            <p>
    
"I brought my stock sedan to CAR HUB, and the transformation was incredible! They upgraded my engine, added a custom exhaust, and even gave it a sleek matte black wrap. My car now turns heads wherever I go. Thanks, CAR HUB
!"
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}