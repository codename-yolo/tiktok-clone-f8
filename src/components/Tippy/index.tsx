import React, { FC } from 'react';
import Tippy from '@tippyjs/react/headless';

import { AttrTippyTye } from './type';

import './index.scss';

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
    onHide?: () => void;
    clsContainer?: string;
}

const TippyComponent: FC<TippyComponentProps> = (props) => {
    const {
        visible,
        trigger,
        onClickOutside,
        placement = 'bottom',
        delay,
        width,
        containerEle,
        dataComponent,
        children,
        clsContainer,
        onHide,
        ...passProps
    } = props;

    const propsTrigger = {
        ...(trigger
            ? {
                  trigger,
                  hideOnClick: false,
                  onHide,
              }
            : {
                  visible,
                  onClickOutside,
              }),
    };

    const renderContainer = (attrs: AttrTippyTye) => {
        return (
            <div
                tabIndex={-1}
                className={`wrapper-tippy-common ${clsContainer}`}
                style={{
                    width: width ? width : containerEle?.getBoundingClientRect().width,
                }}
                {...attrs}
            >
                {dataComponent}
            </div>
        );
    };

    return (
        <Tippy
            {...propsTrigger}
            {...passProps}
            interactive
            delay={delay || [0, 700]}
            placement={placement}
            render={renderContainer}
        >
            {children}
        </Tippy>
    );
};

export default TippyComponent;
