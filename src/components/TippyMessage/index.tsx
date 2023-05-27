import React, { FC } from 'react';
import Tippy from '@tippyjs/react';

import TippyBox from './components/TippyBox';

import styled from './index.module.scss';

interface TippyMessageProps {
    message: string;
    children: React.ReactElement;
    visible?: boolean;
    handleShowTippy?: () => void;
    handleHiddenTippy?: () => void;
    placement?: any;
    arrow?: boolean;
    trigger?: boolean | string;
    delay?: [number | null, number | null] | number | undefined;
    onHide?: () => void;
}

const TippyMessage: FC<TippyMessageProps> = (props) => {
    const {
        message,
        children,
        visible,
        trigger,
        handleHiddenTippy,
        placement = 'bottom',
        delay,
        arrow = false,
        ...passProps
    } = props;

    const propsTrigger = {
        [trigger ? 'trigger' : 'visible']: trigger || visible,
    };

    return (
        <Tippy
            {...propsTrigger}
            {...passProps}
            className={styled['wrapper-tippy-message']}
            arrow={arrow}
            onClickOutside={handleHiddenTippy}
            delay={delay}
            placement={placement}
            content={<TippyBox message={message} />}
        >
            {children}
        </Tippy>
    );
};

export default TippyMessage;
