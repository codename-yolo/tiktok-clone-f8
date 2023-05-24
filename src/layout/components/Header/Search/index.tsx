import React, { FC, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';

import useDebounce from '~/hooks/useDebounce';

import TippyComponent from '~/components/Tippy';
import AccountList from './components/AccountList';

import callApi from '~/services';

import { AccountType } from './type';

import './index.scss';

const defaultSearchResult = [
    {
        id: 30,
        full_name: 'acmillan',
        nickname: 'AC Milan',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a8020ee50adfdef2a572f88eaa327c78~c5_300x300.webp?x-expires=1684947600&x-signature=Vp7fBOM%2BVC4%2FEr1%2FuC4lfVWsCHE%3D',
    },
    {
        id: 31,
        full_name: 'acxuantai',
        nickname: '🍌 A.C Xuân Tài',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1661958352349185~c5_300x300.webp?x-expires=1684947600&x-signature=Im6hiBskXjdBeFfhTIfS7babPTI%3D',
    },
];

const Search: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchResult, setSearchResult] = useState<AccountType[]>([]);

    const searchValueDebounce = useDebounce(searchValue, 500);

    const containerRef = useRef<HTMLDivElement>(null);
    const inputSearchRef = useRef<HTMLInputElement>(null);

    const getAccount = async () => {
        if (searchValue.trim()) {
            setIsLoading(true);
            const result = await callApi({
                url: `users/search`,
                params: {
                    q: encodeURIComponent(searchValue),
                },
            });
            setIsLoading(false);
            setSearchResult(result.data);
        }
    };

    useEffect(() => {
        console.log('ef');

        getAccount();
    }, [searchValueDebounce, getAccount]);

    useEffect(() => {
        console.log('ef2');

        if (!searchValue) {
            setSearchResult(defaultSearchResult);
        }
    }, [searchValue]);

    const handleChangeInputSearch = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleClearInputSearch = () => {
        setSearchValue('');
        inputSearchRef.current?.focus();
    };

    const handleShowSearchResult = () => {
        if (!isEmpty(searchResult)) {
            setVisible(true);
        }
    };

    const handleHiddenSearchResult = () => {
        setVisible(false);
    };

    return (
        <TippyComponent
            visible={visible && !!searchResult.length}
            onClickOutside={handleHiddenSearchResult}
            dataComponent={<AccountList data={searchResult} />}
            containerEle={containerRef.current}
            clsContainer="custom-tippy-search-header"
        >
            <div className="wrapper-search-header" ref={containerRef}>
                <input
                    ref={inputSearchRef}
                    value={searchValue}
                    onChange={handleChangeInputSearch}
                    onFocus={handleShowSearchResult}
                    type="text"
                    className="input-search"
                    placeholder="Search account and videos"
                    spellCheck={false}
                    autoComplete="off"
                />
                <div className="custom-wrapper-btn">
                    {searchValue && !isLoading && (
                        <FontAwesomeIcon
                            className={`btn-clear`}
                            icon={faCircleXmark}
                            onClick={handleClearInputSearch}
                        />
                    )}

                    {isLoading && <FontAwesomeIcon className="loading" icon={faSpinner} />}
                </div>

                <span className="line" />

                <button className="search-btn">
                    <FontAwesomeIcon
                        className="icon"
                        icon={faMagnifyingGlass}
                        onClick={getAccount}
                    />
                </button>

                <div className="border-div" />
            </div>
        </TippyComponent>
    );
};

export default Search;
