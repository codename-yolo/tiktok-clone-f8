import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Search from './Search';
import Action from './Action';

import icons from '~/assets';

import styled from './index.module.scss';

const { TikTokIcon } = icons;

const Header: FC = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <header className={styled['wrapper-header']}>
            <div className={styled['inner']}>
                <div className={styled['logo']}>
                    <TikTokIcon onClick={handleBackToHome} />
                </div>
                <div className={styled['search']}>
                    <Search />
                </div>
                <div className={styled['action']}>
                    <Action />
                </div>
            </div>
        </header>
    );
};

export default Header;
