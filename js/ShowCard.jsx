// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* if props is passed in using an actual object rather than the spread operator (...object) then this is how it
should be outputted to the screen
const ShowCard = props => (
    <div className="show-card">
        <div className='show-card'>
            <img alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
            <div>
                <h3> {props.show.title} </h3>
                <h3> ({props.show.year}) </h3>
                <p> {props.show.description}    </p>
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
const Wrapper = styled((Link: any))`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overFlow: hidden;
    color: black;
    text-decoration: none;
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;    
`;

class ShowCard extends Component {
    // tells the component to never update once it renders; for better performace
    // method should be used in classes that do not contain state, as it will prevent it from updating state
    shouldComponentUpdate() {
        return false;
    }
    props: Show
    render() {
        return (
            <Wrapper to={`/details/${this.props.imdbID}`}>
                <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
                <div>
                    <h3> {this.props.title} </h3>
                    <h3> ({this.props.year}) </h3>
                    <p> {this.props.description} </p>
                </div>
            </Wrapper>
        )
    }
}

/*
if props is displayed using spread operator (...object) then this is how it should be outputted
*/
// const ShowCard = (props: { poster: string, title: string, year: string, description: string, imdbID: string }) => (
//     <Wrapper to={`/details/${props.imdbID}`}>
//         <Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
//         <div>
//             <h3> {props.title} </h3>
//             <h3> ({props.year}) </h3>
//             <p> {props.description} </p>
//         </div>
//     </Wrapper>
// );

export default ShowCard;