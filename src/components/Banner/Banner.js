import React, {Component} from 'react';
import Slider from "react-slick";
import './Banner.css';

class Banner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
            <div className="banner_item">
                <div className="overly">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="banner_text">
                                    <h6>Architecture &amp; Interior</h6>
                                    <h1>Modern &amp; Unique <span>Buildings Ever</span></h1>
                                    <a href="/"><span>See Projects</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_item2">
                <div className="overly">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="banner_text">
                                    <h6>Architecture &amp; Interior</h6>
                                    <h1>Modern &amp; Unique <span>Buildings Ever</span></h1>
                                    <a href="/"><span>See Projects</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_item3">
                <div className="overly">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="banner_text">
                                    <h6>Architecture &amp; Interior</h6>
                                    <h1>Modern &amp; Unique <span>Buildings Ever</span></h1>
                                    <a href="/"><span>See Projects</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}

export default Banner;
