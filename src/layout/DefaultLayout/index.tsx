import React, { FC } from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';

interface DefaultLayoutProps {
    children?: React.ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
    const { children } = props;

    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
