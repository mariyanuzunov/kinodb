import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Thmbnail.styles';

function Thumbnail({ image, movieId, clickable }) {
    return (
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt="movie-thumbnail" />
                </Link>
            ) : (
                <Image src={image} alt="movie-thumbnail" />
            )}
        </div>
    );
}

export default Thumbnail;
