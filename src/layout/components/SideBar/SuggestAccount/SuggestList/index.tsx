import React, { FC } from 'react';
import SuggestItem from './SuggestItem';

const data = [
    {
        id: 1,
        name: 'nongdan37tvnongdan37tvnongdan37tv',
        nickName: 'Đăng Store 0903',
        avatar: 'https://toquoc.mediacdn.vn/thumb_w/640/280518851207290880/2022/12/15/p0dnxrcv-16710704848821827978943.jpg',
        view: '4',
    },
    {
        id: 2,
        name: 'lamthanhhieu123',
        nickName: 'Minh Hiếu ( 🇻🇳 )',
        avatar: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
        view: '10.k',
    },
    {
        id: 3,
        name: 'zgslot',
        nickName: 'zgslot',
        avatar: 'https://static01.nyt.com/images/2022/12/04/magazine/04mag-avatar/04mag-avatar-videoSixteenByNine3000.jpg',
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
