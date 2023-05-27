import React, { FC } from 'react';

import styled from './index.module.scss';

interface MenuItemProps {
    keyName: string;
    name: string;
    icon: React.ReactNode;
    action?: any;
    onClick?: () => void;
    cls?: string;
}

const MenuItem: FC<MenuItemProps> = (props) => {
    const { name, icon, cls, action, onClick, keyName } = props;

    return (
        <div className={`${styled['wrapper-menu-item']} ${cls ? cls : ''}`} onClick={onClick}>
            <div className={styled['title']}>
                {icon}{' '}
                <span className={`${keyName === 'c-l' ? styled['children'] : ''}`}>{name}</span>
            </div>
            {action && <div className={styled['action']}>{action}</div>}
        </div>
    );
};

export default MenuItem;
