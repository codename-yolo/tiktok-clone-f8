import React, { FC } from 'react';

import './index.scss';

interface MenuItemProps {
    keyName: string;
    name: string;
    icon: React.ReactNode;
    action?: any;
    onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = (props) => {
    const { name, icon, action, onClick, keyName } = props;

    return (
        <div className="wrapper-menu-item" onClick={onClick}>
            <div className="title">
                {icon} <span className={`${keyName === 'c-l' ? 'children' : ''}`}>{name}</span>
            </div>
            {action && <div className="action">{action}</div>}
        </div>
    );
};

export default MenuItem;
