import React from 'react';
import { shape, string } from 'prop-types';

const ShowCard = props => (
    <div className="show-card">
        <div className='show-card'>
            <img alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
            <div>
                <h3> {props.show.title} </h3>
                <h3> ({props.show.year}) </h3>
                <p> {props.show.description} </p>
            </div>
        </div>
    </div>
);

// shape here just means object
// there is a default props-type as well
ShowCard.propTypes = {
    show: shape({
        poster: string.isRequired,
        title: string.isRequired,
        year: string.isRequired,
        description: string.isRequired
    }).isRequired
}

export default ShowCard;