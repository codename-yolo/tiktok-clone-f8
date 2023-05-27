import React, { FC } from 'react';

import Image from '~/components/Image';

import { icons } from '~/assets';

import styled from './index.module.scss';

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
        <div className={styled['wrapper-account-item']}>
            <div className={styled['image']}>
                <Image src={image} alt={name} />
            </div>
            <div className={styled['info']}>
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
