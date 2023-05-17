import React, { FC } from 'react';

interface ProfileProps {
    children?: React.ReactNode;
}

const Profile: FC<ProfileProps> = (props) => {
    const { children } = props;

    console.log(children);

    return <div>Profile</div>;
};

export default Profile;
