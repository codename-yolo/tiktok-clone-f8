import React, { FC } from 'react';

import VideoList from './VideoList';

import { classNames } from '~/utils';

import styled from './index.module.scss';
// import { get, fetchData } from './http';

const cx = classNames.bind(styled);

const Videos: FC = () => {
    console.log('render');

    // const albums = get(fetchData(`/the-beatles/albums`));

    // console.log('albums', albums);

    return (
        <div className={cx('wrapper-videos')}>
            <h2 className={cx('title')}>Videos</h2>
            {/* <ul> */}
            {/* {albums.map((album: any) => (
                    <li key={album.id}>
                        {album.title} ({album.year})
                    </li>
                ))} */}
            {/* </ul> */}
            <VideoList />
        </div>
    );
};

export default Videos;
