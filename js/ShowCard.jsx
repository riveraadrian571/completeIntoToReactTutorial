// @flow

import React from 'react';
import styled from 'styled-components';

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

// creates a style guide on the page
// nothing to do with interaction with babel
// look into style library called polish
const Wrapper = styled.div`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overFlow: hidden;
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;    
`;

/*
if props is displayed using spread operator (...object) then this is how it should be outputted
*/
const ShowCard = (props: { poster: string, title: string, year: string, description: string }) => (
    <Wrapper>
        <Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
        <div>
            <h3> {props.title} </h3>
            <h3> ({props.year}) </h3>
            <p> {props.description} </p>
        </div>
    </Wrapper>
);

export default ShowCard;