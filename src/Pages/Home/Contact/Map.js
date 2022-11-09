import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};


const Map = () => {
    return (
        <div className='flex justify-center'>
            <iframe className='rounded-md border border-activeColor' title='map' width="280" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
    );
};

export default Map;