import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './UserMap.css';
const UsersMap = (props) => {
  const user = props.users.map((user, index) => {
    let coords = [user.coords[0][1], user.coords[0][0]];
    console.log(coords);
    return (
      <>
        <Marker position={coords}></Marker>
      </>
    );
  });

  return (
    <Map center={[52.215933, 19.134422]} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {user}
    </Map>
  );
};

export default UsersMap;
