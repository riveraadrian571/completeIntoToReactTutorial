import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => (
    <div className='search'>
        { /* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
        { /* map function will take an array of objects and convert to array of little react components,
        also extracts a property title from each object of the array */ }
        {preload.shows.map(show => <ShowCard show={show} />)}
    </div>
);

export default Search;