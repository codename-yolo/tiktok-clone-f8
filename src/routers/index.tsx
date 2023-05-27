import { useRoutes } from 'react-router-dom';

import { DefaultLayout } from '../layout';

import { privateRouters } from './const';

const Routers = () => {
    const element = useRoutes(
        privateRouters.map(
            ({ layout: Layout = DefaultLayout, element, path, noLayout, ...item }) => ({
                path,
                element: noLayout ? element : <Layout>{element}</Layout>,
                ...item,
            }),
        ),
    );

    return element;
};

export default Routers;
