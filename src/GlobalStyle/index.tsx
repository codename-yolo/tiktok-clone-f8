import React, { FC } from 'react';
import './index.scss';

interface GlobalStyleProps {
    children: React.ReactNode;
}

const GlobalStyle: FC<GlobalStyleProps> = (props) => {
    const { children } = props;

    return <>{children}</>;
};

export default GlobalStyle;
