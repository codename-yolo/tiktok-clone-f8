import { useRoutes } from 'react-router-dom';

import { privateRouters } from './const';
import { DefaultLayout } from '../layout';

const Routers = () => {
    const element = useRoutes(
        privateRouters.map(({ layout, ...item }) => {
            const Layout = layout || DefaultLayout;
            const Element = item.element;

            return {
                ...item,
                element: (
                    <Layout>
                        <Element />
                    </Layout>
                ),
            };
        }),
    );

    return element;
};

export default Routers;
