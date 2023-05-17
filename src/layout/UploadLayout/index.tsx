import React, { FC } from 'react';

interface UploadLayoutProps {
    children?: React.ReactNode;
}

const UploadLayout: FC<UploadLayoutProps> = (props) => {
    const { children } = props;

    return (
        <div>
            UploadLayout
            {children}
        </div>
    );
};

export default UploadLayout;
