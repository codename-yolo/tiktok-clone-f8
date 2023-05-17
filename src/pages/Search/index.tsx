import React, { FC } from 'react';

interface SearchProps {
    children?: React.ReactNode;
}

const Search: FC<SearchProps> = (props) => {
    const { children } = props;

    console.log(children);

    return <div>Search</div>;
};

export default Search;
