import React, { FC } from 'react';

interface HomeProps {
    children?: React.ReactNode;
}

const Home: FC<HomeProps> = () => {
    return <div>Home page</div>;
};

export default Home;
