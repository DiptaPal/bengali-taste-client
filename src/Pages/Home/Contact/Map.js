import React from 'react';

const Map = () => {
    return (
        <div data-aos="fade-up" className='flex justify-center'>
            <iframe className='rounded-md border border-activeColor' title='map' width="280" height="340" id="gmap_canvas" src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
    );
};

export default Map;