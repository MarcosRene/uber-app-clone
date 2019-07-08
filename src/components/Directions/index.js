import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onRead }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onRead}
        apikey="AIzaSyBDS8x1Bm0u_qwW5aIWg7TR9VTsAUAKQLE"
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;
