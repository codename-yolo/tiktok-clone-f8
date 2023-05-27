import React, { FC } from 'react';

import styled from './index.module.scss';

interface TippyBoxProps {
    message: string;
    cls?: string;
}

const TippyBox: FC<TippyBoxProps> = (props) => {
    const { message, cls } = props;

    return (
        <div className={`${styled['wrapper-tippy-box']} ${cls ? cls : ''}`}>
            <span className={styled['content']}>{message}</span>
        </div>
    );
};

export default TippyBox;
