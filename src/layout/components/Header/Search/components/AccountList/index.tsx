import React, { FC } from 'react';

import AccountItem from './AccountItem';

import './index.scss';

interface AccountListProps {
    data?: any[];
}

const AccountList: FC<AccountListProps> = (props) => {
    const { data } = props;

    return (
        <div className="wrapper-account-list">
            <div className="title">Account</div>
            <div className="content">
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
