import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class CarouselBro extends Component {
    kucingBertasbih = () => {
        if(this.props.munculText) {
            return (<h1>{this.props.textnya}</h1>);
        }
    }
    render() {
        return (
            <div>
                <Carousel showThumbs={false} showIndicators={false} className="container kucing">
                    <div className="merdeka">
                        <img src={this.props.image1} alt="BDO 1" />
                        <p className="legend">{this.props.legend1}</p>
                    </div>
                    <div className="merdeka">
                        <img src={this.props.image2} alt="BDO 2" />
                        <p className="legend">{this.props.legend2}</p>
                    </div>
                    <div className="merdeka">
                        <img src={this.props.image3} alt="BDO 3"/>
                        <p className="legend">{this.props.legend3}</p>
                    </div>
                </Carousel>
                {this.kucingBertasbih()}
            </div>
        );
    }
}

export default CarouselBro;