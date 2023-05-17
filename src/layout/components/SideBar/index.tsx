import React, { FC } from 'react';

interface SideBarProps {
    children?: React.ReactNode;
}

const SideBar: FC<SideBarProps> = (props) => {
    const { children } = props;

    console.log(children);

    return <div>SideBar</div>;
};

export default SideBar;
