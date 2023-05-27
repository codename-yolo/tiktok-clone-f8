import React, { FC } from 'react';

import Image from '@components/Image';
import Button from '~/components/Button';

import { classNames } from '~/utils';

import { icons } from '~/assets';

import styled from './index.module.scss';

const cx = classNames.bind(styled);

const { VerifyIcon } = icons;

interface ItemInfoProps {
    data: {
        avatar: string;
        name: string;
        nickName: string;
        contact?: string;
        following?: string | number;
        likes?: string | number;
    };
}

const ItemInfo: FC<ItemInfoProps> = (props) => {
    const { avatar, name, nickName, contact, following, likes } = props.data;

    return (
        <div className={cx('wrapper-item-info')}>
            <div className={cx('action')}>
                <div className={cx('wrapper-image')}>
                    <Image src={avatar} />
                </div>

                <Button size="small" type="outline" cls={cx('btn-following')}>
                    Following
                </Button>
            </div>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>
                        <div>{name}</div>
                        <VerifyIcon />
                    </h4>
                    <span>{nickName}</span>
                </div>
                <div className={cx('social-count')}>
                    <span>
                        <strong>{following}M</strong>Following
                    </span>
                    <span>
                        <strong>{likes}M</strong>Likes
                    </span>
                </div>
            </div>
            <div className={cx('contact')}>{contact}</div>
        </div>
    );
};

export default ItemInfo;
