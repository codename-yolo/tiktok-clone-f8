import React, { FC, useLayoutEffect, useRef, useState } from 'react';

import { classNames } from '~/utils';

import styled from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { isEmpty } from 'lodash';

const cx = classNames.bind(styled);

const NavSearch: FC = () => {
    const [lineStyled, setLineStyled] = useState<React.CSSProperties>({});

    const refContainer = useRef<HTMLDivElement>(null);
    const refLine = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (refContainer.current) {
            const firstChild = refContainer.current.children[0]
                ?.firstChild as HTMLSpanElement | null;
            if (firstChild) {
                if (refLine?.current) {
                    Object.assign(refLine.current.style, {
                        left: `${firstChild.offsetLeft}px`,
                        width: `${firstChild.clientWidth}px`,
                    });

                    if (isEmpty(lineStyled)) {
                        setLineStyled({
                            left: `${firstChild.offsetLeft}px`,
                            width: `${firstChild.clientWidth}px`,
                        });
                    }
                }
            }

            const handleEventCallBack = (
                element: HTMLAnchorElement,
                action: 'addEventListener' | 'removeEventListener',
                type: string,
            ) => {
                const hasPx = action === 'addEventListener' ? 'px' : '';
                const styles: React.CSSProperties = {
                    left: `${(element.firstChild as HTMLSpanElement)?.offsetLeft}${hasPx}`,
                    width: `${(element.firstChild as HTMLSpanElement)?.clientWidth}${hasPx}`,
                };

                element[action](type, () => {
                    if (refLine?.current) {
                        Object.assign(refLine.current.style, styles);
                    }
                });
            };

            Array.from(refContainer.current.children).forEach((item: any) => {
                if (item?.tagName !== 'DIV') {
                    handleEventCallBack(item as HTMLAnchorElement, 'addEventListener', 'mouseover');
                    handleEventCallBack(
                        item as HTMLAnchorElement,
                        'addEventListener',
                        'mouseleave',
                    );
                }
            });

            return () => {
                if (refContainer.current) {
                    Array.from(refContainer.current.children).forEach((item: any) => {
                        if (item?.tagName !== 'DIV') {
                            handleEventCallBack(
                                item as HTMLAnchorElement,
                                'removeEventListener',
                                'mouseover',
                            );
                            handleEventCallBack(
                                item as HTMLAnchorElement,
                                'removeEventListener',
                                'mouseleave',
                            );
                        }
                    });
                }
            };
        }
    }, [lineStyled]);

    const handleChangeTab = (event: React.MouseEvent<HTMLAnchorElement>) => {
        let targetElement = event.currentTarget.firstChild as HTMLSpanElement;

        if (event.target !== event.currentTarget) {
            targetElement = event.target as HTMLSpanElement;
        }

        setLineStyled({
            left: `${targetElement?.offsetLeft}px`,
            width: `${targetElement?.clientWidth}px`,
        });
    };

    const tabs = [
        { key: 1, title: 'Top', to: '/search' },
        { key: 2, title: 'Accounts', to: '/search/accounts' },
        { key: 3, title: 'Videos', to: '/search/videos' },
        { key: 4, title: 'LIVE', to: '/search/live' },
    ];

    const renderTabs = () => {
        return tabs.map(({ key, title, to }) => {
            return (
                <NavLink
                    key={key}
                    className={cx('search-tab')}
                    to={to}
                    end
                    onClick={handleChangeTab}
                >
                    <span>{title}</span>
                </NavLink>
            );
        });
    };

    return (
        <div className={cx('wrapper-search-tab-list')}>
            <div className={cx('search-tab-container')} ref={refContainer}>
                {renderTabs()}
                <div className={cx('search-tab-line')} style={lineStyled} ref={refLine} />
            </div>
        </div>
    );
};

export default NavSearch;
