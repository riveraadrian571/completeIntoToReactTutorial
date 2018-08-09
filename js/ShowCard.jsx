import React from 'react';
import { string } from 'prop-types';

/* if props is passed in using an actual object rather than the spread operator (...object) then this is how it
should be outputted to the screen
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
// ***make sure to import shape from prop-types
// there is a default props-type as well
ShowCard.propTypes = {
    show: shape({
        poster: string.isRequired,
        title: string.isRequired,
        year: string.isRequired,
        description: string.isRequired
    }).isRequired
}
*/

/*
if props is displayed using spread operator (...object) then this is how it should be outputted
*/
const ShowCard = props => (
    <div className="show-card">
        <div className='show-card'>
            <img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
            <div>
                <h3> {props.title} </h3>
                <h3> ({props.year}) </h3>
                <p> {props.description} </p>
            </div>
        </div>
    </div>
);

ShowCard.propTypes = {
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
};

export default ShowCard;