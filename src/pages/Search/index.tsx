import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavSearch from './NavSearch';

import { classNames } from '~/utils';

import styled from './index.module.scss';

const cx = classNames.bind(styled);

const Search: FC = () => {
    return (
        <div className={cx('wrapper-search-page')}>
            <NavSearch />
            <div className={cx('content')}>
                <Suspense fallback={<div style={{ background: 'red' }}>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};

export default Search;
