import React, { FC } from 'react';
import SuggestItem from './SuggestItem';

const data = [
    {
        id: 1,
        name: 'nongdan37tvnongdan37tvnongdan37tv',
        nickName: 'Đăng Store 0903',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/58e46e617f369746d5befa20b03f822a~c5_100x100.webp?x-expires=1685091600&x-signature=URApfszxquL515FN%2B0UQmHrU7iE%3D',
        view: '4',
    },
    {
        id: 2,
        name: 'lamthanhhieu123',
        nickName: 'Minh Hiếu ( 🇻🇳 )',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/2d2646883567959801c149c1dbbdc009~c5_100x100.webp?x-expires=1685095200&x-signature=SV9zjekPOOl9fVkAA7LFwAHG12Y%3D',
        view: '10.k',
    },
    {
        id: 3,
        name: 'zgslot',
        nickName: 'zgslot',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/babb17a58aa55fa99e98f350c0e030ac.webp?x-expires=1685095200&x-signature=c5gHldtKK7UGZhSpwnrPFMx2uQM%3D',
        view: '20.k',
    },
];

interface SuggestListProps {
    data?: any[];
}

const SuggestList: FC<SuggestListProps> = () => {
    // const { data } = props;
    return (
        <div>
            {data.map(({ id, name, nickName, avatar, view }) => {
                return (
                    <SuggestItem
                        key={id}
                        name={name}
                        nickName={nickName}
                        avatar={avatar}
                        view={view}
                    />
                );
            })}
        </div>
    );
};

export default SuggestList;
