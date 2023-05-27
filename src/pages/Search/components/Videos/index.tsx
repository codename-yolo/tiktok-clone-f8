import React, { FC } from 'react';

import VideoList from './VideoList';

import { classNames } from '~/utils';

import styled from './index.module.scss';

const cx = classNames.bind(styled);

const Videos: FC = () => {
    return (
        <div className={cx('wrapper-videos')}>
            <h2 className={cx('title')}>Videos</h2>
            <VideoList />
        </div>
    );
};

export default Videos;
