import React, { FC } from 'react';

import Menu from './Menu';
import SuggestAccount from './SuggestAccount';
import Footer from './Footer';

import styled from './index.module.scss';

interface SideBarProps {
    children?: React.ReactNode;
}

const SideBar: FC<SideBarProps> = () => {
    return (
        <aside className={styled['wrapper-side-bar']}>
            <div className={styled['container']}>
                <Menu />
                <SuggestAccount />
                <Footer />
            </div>
        </aside>
    );
};

export default SideBar;
