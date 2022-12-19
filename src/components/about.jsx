import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a software engineer at Cvent, a leading events, meetings, and hospitality technology provider. I graduated with a Bachelors in Computer Science from the University of Texas at Austin. </p>
                    <p>Outside of work, my hobbies/interests include playing sports (soccer, swimming, basketball, tennis), working out/fitness, reading, coding, cooking, and hanging out with friends/family. I also do modeling/acting on the side</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
