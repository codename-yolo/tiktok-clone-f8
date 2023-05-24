import React, { FC } from 'react';

import './index.scss';
interface SideBarProps {
    children?: React.ReactNode;
}

const SideBar: FC<SideBarProps> = () => {
    return <aside className="wrapper-side-bar">SideBar</aside>;
};

export default SideBar;
