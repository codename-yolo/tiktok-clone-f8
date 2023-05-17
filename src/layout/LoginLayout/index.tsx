import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout: FC = () => {
    return (
        <div>
            LoginLayout
            <Outlet />
        </div>
    );
};

export default LoginLayout;
