import React, { FC } from 'react';

interface HomeProps {
    children?: React.ReactNode;
}

const Home: FC<HomeProps> = (props) => {
    const { children } = props;

    console.log(children);

    return <div>Home page</div>;
};

export default Home;
