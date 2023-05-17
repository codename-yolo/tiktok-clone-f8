import React, { FC } from 'react';

interface UploadProps {
    children?: React.ReactNode;
}

const Upload: FC<UploadProps> = (props) => {
    const { children } = props;

    console.log(children);

    return <div>Upload</div>;
};

export default Upload;
