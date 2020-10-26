import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './UserMap.css';

class UsersMap extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };
  position = [this.state.lat, this.state.lng];
  render() {
    return (
      <Map center={[45.4, -75.7]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default UsersMap;
