// @flow

import React from 'react';
import { Link } from 'react-router-dom';

/*
when this operator is in use ?: the component may or may not receive the props.  If this operator is used, you
must setup default value for that which can be found at the bottom of this component.
*/
const Header = (props: { showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string }) => {
    let utilSpace
    if (props.showSearch) {
        utilSpace = (
            <input
                onChange={props.handleSearchTermChange}
                value={props.searchTerm}
                type="text"
                placeholder="Search"
            />
        );
    } else {
        utilSpace = (
            <h2>
                <Link to="/search"> Back </Link>
            </h2>
        );
    }
    return (
        <header>
            <h1>
                <Link to='/'>
                    svideo
            </Link>
            </h1>
            {utilSpace}
        </header>
    );
};

Header.defaultProps = {
    showSearch: false,
    handleSearchTermChange: function noop() { },
    searchTerm: ''
}

export default Header;