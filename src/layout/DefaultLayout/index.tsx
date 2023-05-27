import React, { FC } from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';

import styled from './index.module.scss';

interface DefaultLayoutProps {
    children?: React.ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
    const { children } = props;

    return (
        <div className={styled['wrapper-default-layout']}>
            <Header />
            <div className={styled['main']}>
                <div className={styled['wrapper']}>
                    <SideBar />
                    <div className={styled['content']}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
