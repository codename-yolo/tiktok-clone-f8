import React, { FC } from 'react';

import SuggestList from './SuggestList';

import styled from './index.module.scss';

const SuggestAccount: FC = () => {
    return (
        <div className={styled['wrapper-suggest-account']}>
            <span className={styled['title']}>Suggested hosts</span>
            <SuggestList />
            <div className={styled['btn-see-more']}>See all</div>
        </div>
    );
};

export default SuggestAccount;
