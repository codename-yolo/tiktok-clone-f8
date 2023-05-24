import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Search from './Search';
import Action from './Action';

import icons from '~/assets';

const { TikTokIcon } = icons;

import './index.scss';

const Header: FC = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <header className="wrapper-header">
            <div className="inner">
                <div className="logo">
                    <TikTokIcon onClick={handleBackToHome} />
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
