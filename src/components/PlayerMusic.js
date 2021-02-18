import React, { Component } from 'react'
import img from '../img/the-wekeend-album.jpg'

export default class PlayerMusic extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="player-music">
                <div class="player-wrap">
                    <div class="info-player">
                        <div class="info-img">
                            <img src={img} width="10px" alt="StarBoyAlbum"></img>
                        </div>
                        <div class="info-player-content">
                            <div>
                                <h3>Cancion</h3>
                            </div>
                            <div> <span>artista</span><span>-</span><span>Album</span></div>
                        </div>
                    </div>
                    <div class="buttons-player">
                        <button class="last"><i class="fas fa-step-backward"></i></button>
                        <button class="play"><i class="fas fa-play"></i></button>
                        <button class="next"><i class="fas fa-step-forward"></i></button>
                    </div>
                    <div class="audio-player">
                        <input type="range">
                        </input>
                        <button class="sound"><i class="fas fa-volume-up"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}