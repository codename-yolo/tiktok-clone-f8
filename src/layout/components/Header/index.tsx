import React, { FC } from 'react';

interface HeaderProps {
    children?: React.ReactNode;
}

const Header: FC<HeaderProps> = (props) => {
    const { children } = props;

    console.log(children);

    return <div>Header</div>;
};

export default Header;
