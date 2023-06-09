import React, { FC } from 'react';
import Tippy from '@tippyjs/react/headless';

import { AttrTippyTye } from './type';

import styled from './index.module.scss';

interface TippyComponentProps {
    visible?: boolean;
    handleShowTippy?: () => void;
    onClickOutside?: () => void;
    width?: string | number;
    containerEle?: HTMLElement | null;
    dataComponent: React.ReactNode | string;
    placement?: any;
    children?: React.ReactElement;
    trigger?: string;
    delay?: [number | null, number | null] | number | undefined;
    offset?: [number, number];
    onHide?: () => void;
    clsContainer?: string;
}

const TippyComponent: FC<TippyComponentProps> = (props) => {
    const {
        visible,
        trigger,
        onClickOutside,
        placement = 'bottom',
        delay = [0, 700],
        width,
        containerEle,
        dataComponent,
        children,
        clsContainer,
        onHide,
        offset = [10, 0],
        ...passProps
    } = props;

    const propsTrigger = trigger
        ? { trigger, hideOnClick: false, onHide }
        : { visible, onClickOutside };

    const renderContainer = (attrs: AttrTippyTye) => {
        return (
            <div
                tabIndex={-1}
                className={`${styled['wrapper-tippy-common']} ${clsContainer}`}
                style={{
                    width: width ? width : containerEle?.getBoundingClientRect().width,
                }}
                {...attrs}
            >
                {dataComponent}
            </div>
        );
    };

    /**
     *  offset={[<ngang>, <dọc>]}
     *  Tính từ phần từ nó tham chiếu
     */

    return (
        <div>
            <Tippy
                {...propsTrigger}
                {...passProps}
                offset={offset}
                interactive
                delay={delay}
                placement={placement}
                render={renderContainer}
            >
                {children}
            </Tippy>
        </div>
    );
};

export default TippyComponent;
