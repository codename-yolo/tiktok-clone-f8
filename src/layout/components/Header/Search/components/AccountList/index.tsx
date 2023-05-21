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
                {data?.map((item, idx) => {
                    return (
                        <AccountItem
                            key={idx}
                            image="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
                            name={item}
                            nickName={item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AccountList;
