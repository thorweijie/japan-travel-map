import * as React from 'react';
import Map, {NavigationControl} from 'react-map-gl';
import Navbar from './components/navbar.js';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Map mapLib={maplibregl}
                 initialViewState={{
                     longitude: 139.839478,
                     latitude: 35.652832,
                     zoom: 6
                 }}
                 style={{width: "100%", height: " calc(100vh - 77px)"}}
                 mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.REACT_APP_MAPTILER_API_KEY}`}
            >
                <NavigationControl position="top-left" />
            </Map>
        </div>
    );
}

export default App;