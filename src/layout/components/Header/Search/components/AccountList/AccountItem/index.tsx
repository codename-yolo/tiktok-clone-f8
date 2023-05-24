import React, { FC } from 'react';

import Image from '~/components/Image';

import { icons } from '~/assets';

import './index.scss';

const { VerifyIcon } = icons;

interface AccountItemProps {
    image: string;
    name: string;
    nickName: string;
    verify?: boolean;
}

const AccountItem: FC<AccountItemProps> = (props) => {
    const { image, name, nickName, verify } = props;

    return (
        <div className="wrapper-account-item">
            <div className="image">
                <Image src={image} alt={name} />
            </div>
            <div className="info">
                <h4>
                    {name}
                    {verify && <VerifyIcon />}
                </h4>
                <p>{nickName}</p>
            </div>
        </div>
    );
};

export default AccountItem;
