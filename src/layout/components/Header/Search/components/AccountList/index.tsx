import React, { FC } from 'react';

import AccountItem from './AccountItem';

import styled from './index.module.scss';

interface AccountListProps {
    data?: any[];
}

const AccountList: FC<AccountListProps> = (props) => {
    const { data } = props;

    return (
        <div className={styled['wrapper-account-list']}>
            <div className={styled['title']}>Account</div>
            <div className={styled['content']}>
                {data?.map(({ avatar, full_name, nickname, tick }, idx) => {
                    return (
                        <AccountItem
                            key={idx}
                            image={avatar}
                            name={full_name}
                            nickName={nickname}
                            verify={tick}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AccountList;
