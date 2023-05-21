import React, { FC } from 'react';

import Search from './Search';
import Action from './Action';

import icons from '~/assets';

const { TikTokIcon } = icons;

import './index.scss';

const Header: FC = () => {
    return (
        <header className="wrapper-header">
            <div className="inner">
                <div className="logo">
                    <TikTokIcon />
                </div>
                <div className="search">
                    <Search />
                </div>
                <div className="action">
                    <Action />
                </div>
            </div>
        </header>
    );
};

export default Header;
