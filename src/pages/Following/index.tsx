import React, { FC } from 'react';

interface FollowingProps {
    children?: React.ReactNode;
}

const Following: FC<FollowingProps> = (props) => {
    const { children } = props;

    console.log(children);

    return <div>Following page</div>;
};

export default Following;
