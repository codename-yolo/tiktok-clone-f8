import React, { FC, useMemo, useState } from 'react';
import { clone, last, size } from 'lodash';

import MenuItem from './MenuItem';
import Wrapper from '~/components/Wrapper';
import Tippy from '~/components/Tippy';

import { MenuType } from './type.ts';

import './index.scss';

import { icons } from '~/assets';

const { ArrowBackIcon } = icons;

interface MenuProps {
    children: React.ReactElement;
    menuFirst: MenuType[];
}

const Menu: FC<MenuProps> = (props) => {
    const { children, menuFirst } = props;

    const [history, setHistory] = useState([{ title: '', menu: menuFirst }]);

    const currentMenu = useMemo(() => {
        return { title: last(history)?.title, menu: last(history)?.menu || [] };
    }, [history]);

    const renderMenu = useMemo(() => {
        const menu = currentMenu.menu.map(({ id, key, name, icon, action = '', cls, children }) => {
            return (
                <MenuItem
                    key={id}
                    keyName={key}
                    name={name}
                    icon={icon}
                    onClick={() => {
                        if (children) {
                            setHistory((prev) => {
                                return [...prev, { title: name, menu: children }];
                            });
                        } else if (!children) {
                            handleClickItemMenu(action);
                        }
                    }}
                    cls={cls}
                />
            );
        });

        return menu;
    }, [currentMenu]);

    const handleClickItemMenu = (action: string) => {
        switch (action) {
            case 'change_language':
                console.log('change_language');
                break;
            case 'change_animal':
                console.log('change_animal');
                break;
            case 'change_mode':
                console.log('change_mode');
                break;
            case 'to':
                console.log('to');
                break;
            case 'href':
                console.log('href');
                break;
            default:
                break;
        }
    };

    const handleBackHistory = () => {
        if (size(history) > 1) {
            setHistory((prev) => {
                const clonePrev = clone(prev);
                clonePrev.pop();

                return clonePrev;
            });
        }
    };

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            trigger="mouseenter"
            width={224}
            dataComponent={
                <Wrapper cls="wrapper-menu">
                    {size(history) > 1 && (
                        <header>
                            <ArrowBackIcon className="btn-back" onClick={handleBackHistory} />
                            <span className="title">{currentMenu?.title}</span>
                        </header>
                    )}
                    <div className="wrapper-render-menu">{renderMenu}</div>
                </Wrapper>
            }
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
