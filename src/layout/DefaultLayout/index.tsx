import React, { FC } from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';

import './index.scss';

interface DefaultLayoutProps {
    children?: React.ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
    const { children } = props;

    return (
        <div className="wrapper-default-layout">
            <Header />
            <div className="main">
                <div className="wrapper">
                    <SideBar />
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
