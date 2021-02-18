
import React, { Component } from 'react'

export default class FirstMusic extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article className="slider-wrap"  key={this.props.key}>
                <div className="slide-img">
                    <img src={this.props.img} alt={this.props.title}></img>
                    <button><i className="fas fa-play"></i></button>
                </div>
                <div className="slide-content">
                    <div className="info-content">
                        <h2>{this.props.title}</h2>
                        <span>Lo mejor de {this.props.artist}</span><span className="followers">321,123 seguidores</span>
                        <p>
                            Abel Makkonen Tesfaye, más conocido por su nombre artístico The Weeknd, es un cantante,
                            compositor y productor canadiense, conocido por éxitos como «Blinding Lights», «Call Out My
                            Name», «Starboy», «The Hills», «Can't Feel My Face» y «I Feel It Coming»
                        </p>
                    </div>
                    <div className="option-content">
                        <input type="button" value="Reproducir"></input>
                        <input type="button" value="Seguir"></input>
                        <input type="button" value="..."></input>
                    </div>
                </div>
            </article>
        );
    }
}