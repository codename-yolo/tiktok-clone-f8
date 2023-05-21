import React, { FC } from 'react';

interface WrapperProps {
    children?: React.ReactNode;
    cls?: string;
}

const Wrapper: FC<WrapperProps> = (props) => {
    const { children, cls = '' } = props;
    return <div className={cls}>{children}</div>;
};

export default Wrapper;
