import React, { FC } from 'react';

import MenuItem from './MenuItem';

import { MenuItemType } from './type';

import styled from './index.module.scss';

import icons from '~/assets';
const {
    HomeIcon,
    TwoPersonIcon,
    CompassIcon,
    LiveIcon,
    HomeActiveIcon,
    TwoPersonActiveIcon,
    CompassActiveIcon,
    LiveActiveIcon,
} = icons;

interface MenuProps {
    name?: string;
}

const menu: MenuItemType[] = [
    {
        id: 1,
        key: 'for_you',
        name: 'For You',
        to: '/',
        icon: <HomeIcon />,
        activeIcon: <HomeActiveIcon />,
    },
    {
        id: 2,
        key: 'following',
        name: 'Following',
        to: '/following',
        icon: <TwoPersonIcon />,
        activeIcon: <TwoPersonActiveIcon />,
    },
    {
        id: 3,
        key: 'explore',
        name: 'Explore',
        to: '/explore',
        icon: <CompassIcon />,
        activeIcon: <CompassActiveIcon />,
    },
    {
        id: 4,
        key: 'live',
        name: 'LIVE',
        to: '/live',
        icon: <LiveIcon />,
        activeIcon: <LiveActiveIcon />,
    },
];

const Menu: FC<MenuProps> = () => {
    return (
        <nav className={styled['menu']}>
            {menu.map(({ id, ...item }) => {
                return <MenuItem key={id} data={item} />;
            })}
        </nav>
    );
};

export default Menu;
