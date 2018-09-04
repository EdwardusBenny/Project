import React, { Component } from 'react';
import CarouselBro from './CarouselBro';
import image1 from '../images/brazil.jpg';
import image4 from '../images/bdo3.jpg';
import { Link } from 'react-router-dom';

class HomePage extends Component {

    render() {
        return (
            <div>
            <div className="hero">
            <div className="container">
              <div className="row"  >
                <div className="col-md-12">
                  <a className="hero-brand" title="kikipipi"><img alt="Kikipipi Logo" src={image1} width="100%" height="100%"/></a>
                </div>
              </div>
        
              <div className="texthome">
                <h1>
                    Find your Style
                  </h1>
        
                <p className="tagline">
                <Link to="/productpage">See Our Product</Link>
                </p>
              </div>
            </div>
          </div>

<div id="contact">
<div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h2 className="div-title">Contact Us</h2>
    </div>
  </div>

  <div className="row justify-content-center">
    <div className="col-lg-3 col-md-4">
      <div className="info">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>Bumi Cantik no 205<br/>Tangerang,Banten</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>edwardusbenny@gmail.com</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+62 819 9559 5777</p>
        </div>

      </div>
    </div>

    <div className="col-lg-5 col-md-8">
      <div className="form">
        <div id="sendmessage">Your message has been sent. Thank you!</div>
        <div id="errormessage"></div>
        <form action="" method="post" role="form" className="contactForm">
          <div className="form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div className="validation"></div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>

  </div>
</div>
</div>
</div>
        );
    }
}

export default HomePage;