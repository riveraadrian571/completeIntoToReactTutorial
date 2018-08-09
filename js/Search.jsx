import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => (
    <div className='search'>
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
            {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
    </div>
);

export default Search;