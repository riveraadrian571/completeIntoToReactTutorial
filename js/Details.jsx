// @flow

import React from 'react';

const Details = (props) => (
    <div className="details">
        {
            // url for this code: http://localhost:8080/details/tt4288182 
            <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
        }
    </div>
);

export default Details;