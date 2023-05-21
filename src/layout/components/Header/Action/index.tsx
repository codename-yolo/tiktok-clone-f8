import React, { FC, useMemo, useState } from 'react';

import Button from '~/components/Button';
import Menu from './components/Menu';
import Divider from '~/components/Divider';
import Tippy from '~/components/Tippy';

import { MenuType } from './components/Menu/type';

import './index.scss';

import icons from '~/assets';

const {
    MoreIcon,
    GlobeIcon,
    LanguageIcon,
    QuestionIcon,
    MoonIcon,
    MessageIcon,
    InboxIcon,
    PlusIcon,
} = icons;

const menuNotLogged: MenuType[] = [
    {
        id: 1,
        key: 'l',
        name: 'Language',
        icon: <LanguageIcon />,
        children: [
            { id: 2, key: 'c-l', name: 'English', icon: '', action: 'change_language' },
            { id: 3, key: 'c-l', name: 'Vietnamese', icon: '', action: 'change_language' },
            {
                id: 4,
                key: 'c-l',
                name: 'China',
                icon: '',
                children: [
                    { id: 5, key: 'c-l', name: 'This', icon: '', action: 'change_animal' },
                    { id: 6, key: 'c-l', name: 'That', icon: '', action: 'change_animal' },
                    { id: 7, key: 'c-l', name: 'Dog', icon: '', action: 'change_animal' },
                ],
            },
        ],
    },
    { id: 7, key: 'fh', name: 'Feedback and help', action: 'to', icon: <QuestionIcon /> },
    { id: 8, key: 'ks', name: 'Keyboard and shortcuts', action: 'to', icon: <GlobeIcon /> },
    { id: 9, key: 'dm', name: 'Dark mode', action: 'change_mode', icon: <MoonIcon /> },
];

const menuLogged: MenuType[] = [
    {
        id: 1,
        key: 'l',
        name: 'Language',
        icon: <LanguageIcon />,
        children: [
            { id: 2, key: 'c-l', name: 'English', icon: '', action: 'change_language' },
            { id: 3, key: 'c-l', name: 'Vietnamese', icon: '', action: 'change_language' },
            {
                id: 4,
                key: 'c-l',
                name: 'China',
                icon: '',
                children: [
                    { id: 5, key: 'c-l', name: 'This', icon: '', action: 'change_animal' },
                    { id: 6, key: 'c-l', name: 'That', icon: '', action: 'change_animal' },
                    { id: 7, key: 'c-l', name: 'Dog', icon: '', action: 'change_animal' },
                ],
            },
        ],
    },
    { id: 7, key: 'fh', name: 'Feedback and help', action: 'to', icon: <QuestionIcon /> },
    { id: 8, key: 'ks', name: 'Keyboard and shortcuts', action: 'to', icon: <GlobeIcon /> },
    { id: 9, key: 'dm', name: 'Dark mode', action: 'change_mode', icon: <MoonIcon /> },
];

const Action: FC = () => {
    const [isLogged] = useState<boolean>(false);

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
                        <Tippy trigger dataComponent={'hihi'}>
                            <MessageIcon />
                        </Tippy>
                        <InboxIcon />
                    </Divider>
                </>
            ) : (
                <>
                    <Button size="medium" type="text">
                        Upload
                    </Button>
                    <Button size="medium" type="primary">
                        LogOut
                    </Button>
                </>
            )}
            <Menu menuFirst={menuByLogged}>
                {isLogged ? (
                    <img
                        className="avatar"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbJ6q6nCvC-F8ctwjE8F_gh176HK1p-EcKg&usqp=CAU"
                        alt="avatar"
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
