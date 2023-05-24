import { useRoutes } from 'react-router-dom';

import { DefaultLayout } from '../layout';

import { privateRouters } from './const';

const Routers = () => {
    const element = useRoutes(
        privateRouters.map(
            ({ layout: Layout = DefaultLayout, element: Element, noLayout, ...item }) => ({
                ...item,
                element: noLayout ? (
                    <Element />
                ) : (
                    <Layout>
                        <Element></Element>
                    </Layout>
                ),
            }),
        ),
    );

    return element;
};

export default Routers;
