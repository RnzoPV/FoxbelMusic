import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from '../components/Navigation';
import MusicResult from '../components/MusicResult'
import '../css/index.css';
import PlayerMusic from '../components/PlayerMusic';

function App() {
    
    return (
        <Router>
            <Navigation />
            <MusicResult />
            <PlayerMusic />
        </Router>


    );
}

export default App;