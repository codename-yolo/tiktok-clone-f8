import React, { FC } from 'react';

import Image from '~/components/Image';

import { VideoType } from '../../type';

import { classNames } from '~/utils';

import { icons } from '~/assets';

import styled from './index.module.scss';

const { LikeIcon } = icons;

const cx = classNames.bind(styled);

interface VideoItemProps {
    data: VideoType;
}

const VideoItem: FC<VideoItemProps> = (props) => {
    const {
        file_url: src,
        description,
        user: { avatar, nickname },
        likes_count: like,
    } = props.data;

    return (
        <div className={`col l-4 ${cx('wrapper-video-item')}`}>
            <div>
                <video controls>
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            <div className={cx('card-info')}>
                <span className={cx('description')}>{description}</span>
                <div className={cx('detail')}>
                    <div className={cx('user')}>
                        <span>
                            <Image src={avatar} />
                        </span>
                        <p>{nickname}</p>
                    </div>
                    <div className={cx('like')}>
                        <LikeIcon />
                        {like}k
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
