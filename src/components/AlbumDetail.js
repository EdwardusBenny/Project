import React, { Component } from 'react';

class AlbumDetail extends Component {
    render() {
        const { title, artist, url, image } = this.props.album;
        return (
            <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" href={url}>
                    <div className="portfolio-hover img-circle">
                        <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-responsive img-circle" src={image} alt="" />
                </a>
                <div className="portfolio-caption">
                    <h4>{title}</h4>
                    <p className="text-muted">{artist}</p>
                </div>
            </div>
        );
    }
}

export default AlbumDetail;