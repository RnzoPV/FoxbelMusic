import React, { Component } from 'react';

export default class MusicCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article className="music-item" id={this.props.id}>
                <div className="music-img">
                    <img src={this.props.img} width="10px" alt={this.props.title}></img>
                    <button><i className="fas fa-play"></i></button>
                </div>
                <div className="music-content">
                    <div className="music-info">
                        <h3>{this.props.title}</h3>
                        <p>
                            {this.props.artist}
                        </p>
                    </div>
                </div>
            </article>
        );
    }
}