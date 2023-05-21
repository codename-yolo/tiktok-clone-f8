import React, { FC } from 'react';

import icons from '~/assets';

import './index.scss';

const { VerifyIcon } = icons;

interface AccountItemProps {
    image: string;
    name: string;
    nickName: string;
}

const AccountItem: FC<AccountItemProps> = (props) => {
    const { image, name, nickName } = props;
    return (
        <div className="wrapper-account-item">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="info">
                <h4>
                    {name}
                    <VerifyIcon />
                </h4>
                <p>{nickName}</p>
            </div>
        </div>
    );
};

export default AccountItem;
