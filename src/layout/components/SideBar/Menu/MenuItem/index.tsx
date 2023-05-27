import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { classNames } from '~/utils';

import styled from './index.module.scss';

import { MenuItemType } from '../type';

interface MenuItemProps {
    data: MenuItemType;
}

const cx = classNames.bind(styled);

const MenuItem: FC<MenuItemProps> = (props) => {
    const { name, icon, activeIcon, to } = props.data;

    return (
        <NavLink
            className={({ isActive }) => {
                return cx('wrapper-menu-item', { active: isActive });
            }}
            to={to}
        >
            {({ isActive }) => {
                return (
                    <>
                        {isActive ? activeIcon : icon}
                        <span> {name}</span>
                    </>
                );
            }}
        </NavLink>
    );
};

export default MenuItem;
