import React, { FC, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';

import TippyComponent from '~/components/Tippy';
import AccountList from './components/AccountList';

import './index.scss';

const Search: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [searchResult] = useState<string[]>(['cuong', 'minh']);

    const containerRef = useRef<HTMLDivElement>(null);

    const showSearchResult = () => {
        if (!isEmpty(searchResult)) {
            setVisible(true);
        }
    };

    const hiddenSearchResult = () => {
        setVisible(false);
    };

    return (
        <TippyComponent
            visible={visible}
            handleHiddenTippy={hiddenSearchResult}
            dataComponent={<AccountList data={searchResult} />}
            containerEle={containerRef.current}
        >
            <div className="wrapper-search-header" ref={containerRef}>
                <input
                    type="text"
                    className="input-search"
                    placeholder="Search account and videos"
                    spellCheck={false}
                    autoComplete="off"
                    onFocus={showSearchResult}
                />

                <button className="clear-btn">
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className="loading" icon={faSpinner} />
                <span className="line" />

                <button className="search-btn">
                    <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                </button>

                <div className="border-div" />
            </div>
        </TippyComponent>
    );
};

export default Search;
