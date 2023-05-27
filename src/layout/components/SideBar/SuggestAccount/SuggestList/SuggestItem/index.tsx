import React, { FC } from 'react';

import Image from '@components/Image';
import Tippy from '@components/Tippy';

import styled from './index.module.scss';
import ItemInfo from './ItemInfo';

interface SuggestItemProps {
    name: string;
    nickName: string;
    avatar: string;
    view: string;
}

const SuggestItem: FC<SuggestItemProps> = (props) => {
    const { name, nickName, avatar, view } = props;

    return (
        <Tippy
            delay={0}
            offset={[0, 0]}
            dataComponent={<ItemInfo data={props} />}
            placement="bottom"
        >
            <div className={styled['wrapper-suggest-item']}>
                <div className={styled['image']}>
                    <div className={styled['main']}>
                        <Image src={avatar} />
                    </div>
                </div>
                <div className={styled['info']}>
                    <h4>{name}</h4>
                    <span>{nickName}</span>
                </div>
                <div className={styled['view']}>
                    <span>{view}</span>
                </div>
            </div>
        </Tippy>
    );
};

export default SuggestItem;
