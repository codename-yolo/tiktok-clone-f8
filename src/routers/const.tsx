import { UploadLayout } from '../layout';

import Home from '@pages/Home';
import Following from '@pages/Following';
import Upload from '@pages/Upload';
import Profile from '@pages/Profile';
import NotFound from '@pages/NotFound';
import Search from '~/pages/Search';
import TextLorem from '~/components/Text';
import Videos from '~/pages/Search/components/Videos';

import { RouteObject } from 'react-router-dom';

interface PrivateRouteObject extends RouteObject {
    layout?: React.FC;
    noLayout?: boolean;
    children?: PrivateRouteObject[];
}

export const privateRouters: PrivateRouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/following',
        element: <Following />,
    },
    {
        path: '/upload',
        element: <Upload />,
        layout: UploadLayout,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/search',
        element: <Search />,
        children: [
            {
                path: '',
                element: <TextLorem />,
            },
            {
                path: 'videos',
                element: <Videos />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
        noLayout: true,
    },
];

export const publicRouters = [
    // {
    //     element: SubLayout>/SubLayout>
    // }
];
