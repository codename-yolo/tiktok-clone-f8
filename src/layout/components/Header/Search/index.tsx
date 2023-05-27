import React, { FC, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';

import useDebounce from '~/hooks/useDebounce';

import TippyComponent from '~/components/Tippy';
import AccountList from './components/AccountList';

import callApi from '~/services';

import { AccountType } from './type';

import styled from './index.module.scss';

const defaultSearchResult = [
    {
        id: 30,
        full_name: 'acmillan',
        nickname: 'AC Milan',
        avatar: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
    },
    {
        id: 31,
        full_name: 'acxuantai',
        nickname: '🍌 A.C Xuân Tài',
        avatar: 'https://media.istockphoto.com/id/834741464/photo/leisure-photos.jpg?s=612x612&w=0&k=20&c=PkXsoJ_r-r2L4Ltm7vE25V2ZTGNuvj1FvBAJN3JfkaA=',
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
        // console.log('ef');

        getAccount();
    }, [searchValueDebounce]);

    useEffect(() => {
        // console.log('ef2');

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
            clsContainer={styled['custom-tippy-search-header']}
        >
            <div className={styled['wrapper-search-header']} ref={containerRef}>
                <input
                    ref={inputSearchRef}
                    value={searchValue}
                    onChange={handleChangeInputSearch}
                    onFocus={handleShowSearchResult}
                    type="text"
                    className={styled['input-search']}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    autoComplete="off"
                />
                <div className={styled['custom-wrapper-btn']}>
                    {searchValue && !isLoading && (
                        <FontAwesomeIcon
                            className={styled['btn-clear']}
                            icon={faCircleXmark}
                            onClick={handleClearInputSearch}
                        />
                    )}

                    {isLoading && (
                        <FontAwesomeIcon className={styled['loading']} icon={faSpinner} />
                    )}
                </div>

                <span className={styled['line']} />

                <button className={styled['search-btn']}>
                    <FontAwesomeIcon
                        className={styled['icon']}
                        icon={faMagnifyingGlass}
                        onClick={getAccount}
                    />
                </button>

                <div className={styled['border-div']} />
            </div>
        </TippyComponent>
    );
};

export default Search;
