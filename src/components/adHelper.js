import React, { Component } from "react"
import { Helmet } from "react-helmet"

class AdHelper extends Component {
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (typeof window !== "undefined") {
        if (!window.TweenMax) return
        myad_uniqueid_ready()
        clearInterval(this.intervalID)
      }
    }, 500)
  }

  render() {
    return (
      <Helmet>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
          type="text/javascript"
        />
      </Helmet>
    )
  }
}

export default AdHelper

const myad_uniqueid_ready = () => {
  try {
    const { TweenMax, TimelineMax, Power3, Sine } = window
    var tl = new TimelineMax();
    //the following two lines do the SAME thing:
    tl.add(TweenMax.to("#myad-uniqueid-logo-box", 0.5, { y: 0, opacity: 1, ease: Power3.easeOut }));
    tl.add(TweenMax.to(".myad-uniqueid-title", 0.75, { y: 0, opacity: 1, ease: Power3.easeOut }), "+=0.25");
    tl.add(TweenMax.to("#myad-uniqueid-footer-box", 0.5, { opacity: 1, ease: Sine.easeIn }), "-=0.50");
    tl.add(TweenMax.to("#myad-uniqueid-img-0", 0.75, { x: 0, opacity: 1, ease: Power3.easeOut }), "-=0.50");

    var tl2 = new TimelineMax({ repeat: -1, repeatDelay: 1.00 });
    tl2.add(TweenMax.to("#myad-uniqueid-img-1", 0.70, { x: 0, opacity: 1, ease: Power3.easeOut }), "+=0.30");
    tl2.add(TweenMax.to("#myad-uniqueid-img-2", 0.70, { x: 0, opacity: 1, ease: Power3.easeOut }), "+=1.30");
    tl2.add(TweenMax.to("#myad-uniqueid-img-3", 0.70, { x: 0, opacity: 1, ease: Power3.easeOut }), "+=1.30");
    tl2.add(TweenMax.to("#myad-uniqueid-img-4", 0.70, { x: 0, opacity: 1, ease: Power3.easeOut }), "+=1.30");
    tl2.add(TweenMax.to("#myad-uniqueid-img-5", 0.70, { x: 0, opacity: 1, ease: Power3.easeOut }), "+=1.30");

  } catch (error) {
    console.log(error)
  }
}