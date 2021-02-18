import axios from 'axios';
import React, { Component } from 'react';
import FirstMusic from './FirstMusic';
import MusicCard from './MusicCard';
//INGRESAR URL AL NAVEGADOR PARA OBTENER ACCESO AL HOST TEMPORALMENTE
const urlBase = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/';

export default class MusicResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musics: []
        }
    }
    componentDidMount = async () => {
        //Obtener listado de musica obtenidas de la api
        const response = await axios({
            method: 'get',
            url: urlBase
        });
        this.setState({
            musics: response.data.tracks.data
        });
        console.log(response.data.tracks.data);
    }
    render() {

        const musicResult = this.state.musics.map(x => {
            return <MusicCard
                key={x.id}
                id={x.artist.id}
                img={x.artist.picture_medium}
                title={x.title}
                artist={x.artist.name}
            />
        });
        const firstResult = this.state.musics.map((x, i) => {
            if (i === 0) {
                return (
                    <FirstMusic
                        key={x.id}
                        id={x.artist.id}
                        img={x.artist.picture_medium}
                        title={x.title}
                        artist={x.artist.name}
                    />
                );
            }
            else {
                return;
            }
        });
        return (
            <main>
                <section className="container slider">
                    {firstResult}
                </section>
                <section className=" container music-result">
                    <div className="title-section">
                        <h2>Resultados</h2>
                    </div>
                    <div className="music-wrap">
                        {musicResult}
                    </div>
                </section>
            </main>
        );
    }
}