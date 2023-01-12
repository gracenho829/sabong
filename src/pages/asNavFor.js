import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slick-theme.css"; 
import "../css/slick.css";
import sarang from "../resources/members/sarang.png"
import pin from "../resources/pin.png"

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    const singleSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className = "sliderDiv">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings}
        >
          <div className="memberImage">
            <img src={sarang} alt="sarang"></img>
          </div>
          <div className="memberImage">
            <h3>2</h3>
          </div>
          <div className="memberImage">
            <h3>3</h3>
          </div>
          <div className="memberImage">
            <h3>4</h3>
          </div>
          <div className="memberImage">
            <h3>5</h3>
          </div>
          <div className="memberImage">
            <h3>6</h3>
          </div>
        </Slider>
        <img src={pin} style={{width:"20vw", marginBottom: "5rem", marginTop: "2rem"}}alt="pin"/>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          {...singleSettings}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}