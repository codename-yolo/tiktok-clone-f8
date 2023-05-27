import React, { FC, useEffect, useState } from 'react';

import VideoItem from './VideoItem';

import { classNames } from '~/utils';

import styled from './index.module.scss';
import callApi from '~/services';
import { VideoType } from '../type';

const cx = classNames.bind(styled);

const VideoList: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [videos, setVideos] = useState<VideoType[]>([]);

    const getVideos = async () => {
        const response = await callApi({
            url: `videos?type=for-you&page=${encodeURIComponent(page)}`,
        });
        setVideos((prev) => [...prev, ...response.data]);
    };

    function isPageScrolledToBottom() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        return scrollTop + clientHeight >= scrollHeight;
    }

    useEffect(() => {
        getVideos();
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (isPageScrolledToBottom()) {
                setPage(page + 1);
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {
                if (isPageScrolledToBottom()) {
                    setPage(page + 1);
                }
            });
        };
    }, [page]);

    return (
        <div className={`row ${cx('wrapper-video-list')}`}>
            {videos.map((video) => {
                return <VideoItem key={video.id} data={video} />;
            })}
        </div>
    );
};

export default VideoList;
