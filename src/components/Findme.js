import React, { Component } from 'react';
// IMPORT EMAIL COMPONENT
import Email from '../components/Email'


export default class Find extends Component {
  render() {
    // INLINE STYLING
    let style = {
      "backgroundColor": "#FFCB8E",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px"
    }
    let subHeadings = {
      "color": "#fff",
    }

    return (
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={style}>
          <div className="col-lg-8 map">
            <h3 className="sub-headings" style={subHeadings}>Directions</h3>
            <img
              className="img-responsive"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.163412312128!2d-80.0628865853241!3d32.893847485327406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe62e4f3b1e66f%3A0x3de484ad2fb22e68!2s1537+Chance+Dr%2C+Joint+Base+Charleston%2C+SC+29404!5e0!3m2!1sen!2sus!4v1501186992030"/>
            <a href=""><p> 1537A Chance Drive, Charleston, SC 29404-2203 </p></a>
          </div>
          <div className="col-lg-4">
            <h3 className="sub-headings" style={subHeadings}>
              Contact Me
            </h3>
            <hr/>
            <p className="primary-text">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>  </span>
            </p>
          <Email/>
      </div>
    </section>
  </div>
    );
  }
}
