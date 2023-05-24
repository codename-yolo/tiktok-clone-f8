import React, { FC } from 'react';

import './index.scss';

interface TippyBoxProps {
    message: string;
    cls?: string;
}

const TippyBox: FC<TippyBoxProps> = (props) => {
    const { message, cls } = props;

    return (
        <div className={`wrapper-tippy-box ${cls}`}>
            <span className="content">{message}</span>
        </div>
    );
};

export default TippyBox;
