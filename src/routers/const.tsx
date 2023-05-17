import { UploadLayout } from '../layout';

import Home from '@pages/Home';
import Following from '@pages/Following';
import NotFound from '@pages/NotFound';
import Upload from '@pages/Upload';
import Profile from '@pages/Profile';

export const privateRouters = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/home',
        element: Home,
    },
    {
        path: '/following',
        element: Following,
    },
    {
        path: '/upload',
        element: Upload,
        layout: UploadLayout,
    },
    {
        path: '/profile',
        element: Profile,
    },
    {
        path: '*',
        element: NotFound,
    },
];

export const publicRouters = [
    // {
    //     element: SubLayout>/SubLayout>
    // }
];
