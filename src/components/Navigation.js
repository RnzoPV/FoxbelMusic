import React, { Component } from 'react'
import foxbel from '../img/foxbel-music.png'
export default class Navigation extends Component {

    render() {
        return (
            <nav className="sidebar-vertical">
                <ul className="side-nav">
                    <li className="logo">
                        <a href="#"><img src={foxbel} alt="FoxbelLogo"></img></a>
                    </li>
                    <li className="subtitle">
                        <h2>Mi Librería</h2>
                    </li>
                    <li className="option">
                        <a href="#">Recientes</a>
                    </li>
                    <li className="option">
                        <a href="#">Artistas</a>
                    </li>
                    <li className="option">
                        <a href="#">Albums</a>
                    </li>
                    <li className="option">
                        <a href="#">Canciones</a>
                    </li>
                    <li className="option">
                        <a href="#">Estaciones</a>
                    </li>
                    <li className="subtitle">
                        <h2>PlayList</h2>
                    </li>
                    <li className="option"><a href="#">Metal</a></li>
                    <li className="option"><a href="#">Para bailar</a></li>
                    <li className="option"><a href="#">Rock 90s</a></li>
                    <li className="option"><a href="#">Bailados</a></li>
                </ul>
            </nav>
        )
    }
}