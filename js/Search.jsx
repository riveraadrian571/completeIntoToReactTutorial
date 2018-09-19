// @flow

import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

/*
props are immutable objects
all classes that extend to component must have render method and must return markup
use setState with a method that handles an event rather than doing it directly (this.state.inputValue='dsadsa')
*/
class Search extends Component {
    /*
    constructor(props) {
        super(props);
    this.state = {
            searchTerm: "Initial Value"
        };
        // this only gets called once and because its used in the right context will always do changes appropriately
        this.handleChange = this.handleChange.bind(this);
    }
    */
    // this different way of initializing state is not standard yet
    state = {
        searchTerm: ''
    }
    // this different way of handing input change using arrow functions is not standard yet as well
    // never will it create a new context but us the same one to handle input
    // if you have one parameter then the parenthesis is optional, prettier will take them off
    handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
        this.setState({ searchTerm: event.target.value });
    };
    render() {
        return (
            <div className='search'>
                <header>
                    <h1> svideo </h1>
                    <input
                        // onChange={this.handleChange.bind(this) this is bad practice because it calls in a new function and
                        // since the render method can be called so many times, it can ruin performance } 
                        onChange={this.handleSearchTermChange}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search"
                    />
                </header>
                { /* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
                { /* map function will take an array of objects and convert to array of little react components,
                also extracts a property title from each object of the array */ }

                { /*
                if the object is being passed into props in this fashion then it should be referenced like such:
                {props.show.title}
                preload.shows.map(show => <ShowCard show={show} />) */}

                { /* if a spread operator is used (...object) to pass data to props then it should be referenced like such: 
                {props.title} 
                providing a key here is important to maintain order in the mapping process 
                key should be unique here 
                It is very common to forget this div tag below when applying styles to components */ }
                <div>
                    {preload.shows
                        .filter(
                            show =>
                                `${show.title} ${show.description}`.toUpperCase().indexOf(this
                                    .state.searchTerm.toUpperCase()) >= 0
                        )
                        .map(show => <ShowCard key={show.imdbID} {...show} />)}
                </div>
            </div>
        );
    };
};

export default Search;