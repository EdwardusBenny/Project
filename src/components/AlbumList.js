import React, { Component } from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(kucing => {
                console.log(kucing);
                this.setState({ albums: kucing.data });
            });
    }

    renderAlbumList = () => {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state.albums);
        return (
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <h1>Ini AlbumList</h1>
                    <div className="row">
                        {this.renderAlbumList()}
                    </div>
                </div>
            </section>
        );
    }
}

export default AlbumList;