import React, { FC, useMemo, useState } from 'react';

import Button from '~/components/Button';
import Menu from './components/Menu';
import Divider from '~/components/Divider';
import TippyMessage from '~/components/TippyMessage';
import WrapperForwardRef from '~/components/WrapperForwardRef';

import { MenuType } from './components/Menu/type';

import './index.scss';

import { icons } from '~/assets';
import Image from '~/components/Image';

const {
    MoreIcon,
    GlobeIcon,
    LanguageIcon,
    QuestionIcon,
    MoonIcon,
    MessageIcon,
    InboxIcon,
    PlusIcon,
    ProfileIcon,
    CoinIcon,
    FavoriteIcon,
    SettingIcon,
    LogOutIcon,
} = icons;

// const fillDataMenu = () => {
//     const menu: MenuType[] = [];
//     let idx = 30;
//     for (let index = 0; index < 30; index++) {
//         menu.push({
//             id: ++idx,
//             key: 'english',
//             name: 'English',
//             icon: '',
//             action: 'change_language',
//         });
//         menu.push({
//             id: ++idx,
//             key: 'english',
//             name: 'English',
//             icon: '',
//             action: 'change_language',
//         });
//     }

//     return menu;
// };

const menuNotLogged: MenuType[] = [
    {
        id: 1,
        key: 'language',
        name: 'Language',
        icon: <LanguageIcon />,
        children: [
            { id: 2, key: 'english', name: 'English', icon: '', action: 'change_language' },
            { id: 3, key: 'vietnamese', name: 'Vietnamese', icon: '', action: 'change_language' },
            // ...fillDataMenu(),
            {
                id: 4,
                key: 'china',
                name: 'China',
                icon: '',
                children: [
                    { id: 5, key: 'this', name: 'This', icon: '', action: 'change_animal' },
                    { id: 6, key: 'that', name: 'That', icon: '', action: 'change_animal' },
                    { id: 7, key: 'dog', name: 'Dog', icon: '', action: 'change_animal' },
                ],
            },
        ],
    },
    {
        id: 7,
        key: 'feedback_and_help',
        name: 'Feedback and help',
        action: 'to',
        icon: <QuestionIcon />,
    },
    {
        id: 8,
        key: 'keyboard_and_shortcuts',
        name: 'Keyboard and shortcuts',
        action: 'to',
        icon: <GlobeIcon />,
    },
    { id: 9, key: 'dark_mode', name: 'Dark mode', action: 'change_mode', icon: <MoonIcon /> },
];

const menuLogged: MenuType[] = [
    { id: 10, key: 'view_profile', name: 'View profile', action: 'to', icon: <ProfileIcon /> },
    { id: 11, key: 'get_coin', name: 'Get coins', action: 'to', icon: <CoinIcon /> },
    { id: 12, key: 'favorite', name: 'Favorites', action: 'to', icon: <FavoriteIcon /> },
    { id: 13, key: 'setting', name: 'Setting', action: 'to', icon: <SettingIcon /> },
    ...menuNotLogged,
    {
        id: 14,
        key: 'logout',
        name: 'Logout',
        action: 'to',
        icon: <LogOutIcon />,
        cls: 'border-top',
    },
];

const Action: FC = () => {
    const [isLogged] = useState<boolean>(true);

    const menuByLogged = useMemo(() => {
        return isLogged ? menuLogged : menuNotLogged;
    }, [isLogged]);

    return (
        <div className="wrapper-action-header">
            {isLogged ? (
                <>
                    <Divider orientation="right" size={20}>
                        <Button size="medium" type="outline" leftIcon={<PlusIcon />}>
                            Upload
                        </Button>
                        <TippyMessage arrow trigger="mouseenter" message="Message">
                            <WrapperForwardRef>
                                <MessageIcon />
                            </WrapperForwardRef>
                        </TippyMessage>
                        <TippyMessage arrow trigger="mouseenter" message="Inbox">
                            <WrapperForwardRef>
                                <InboxIcon />
                            </WrapperForwardRef>
                        </TippyMessage>
                    </Divider>
                </>
            ) : (
                <>
                    <Button type="primary" to="123" size="medium">
                        Upload
                    </Button>
                    <Button size="medium" type="primary">
                        LogOut
                    </Button>
                </>
            )}
            <Menu menuFirst={menuByLogged}>
                {isLogged ? (
                    <Image
                        cls="avatar"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbJ6q6nCvC-F8ctwjE8F_gh176HK1p-EcKg&usqp=CAU"
                        alt="avatar"
                        fallback="https://cdn.dribbble.com/users/27766/screenshots/3488007/media/30313b019754da503ec0860771a5536b.png?compress=1&resize=400x300"
                    />
                ) : (
                    <Button size="medium" type="text">
                        <MoreIcon />
                    </Button>
                )}
            </Menu>
        </div>
    );
};

export default Action;
