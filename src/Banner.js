import React from 'react';
import './Banner.css';
import banner2 from './banner2.jpg';

function Banner() {
    return(
        <div className='banner'>
            <div className='App'>
                {/* <h1>Banner</h1> */}
                {/* <img id='flipim' src={banner2} alt='image not found'/> */}
                <img id='ban' src={banner2} alt='image not found'/>
            </div>
        </div>
    );
}

export default Banner;