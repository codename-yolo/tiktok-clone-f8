import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface SearchProps {
    children?: React.ReactNode;
}

const Search: FC<SearchProps> = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Search;
