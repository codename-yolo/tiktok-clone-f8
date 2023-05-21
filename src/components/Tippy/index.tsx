import React, { FC } from 'react';
import Tippy from '@tippyjs/react/headless';

import './index.scss';

interface TippyComponentProps {
    visible?: boolean;
    handleShowTippy?: () => void;
    handleHiddenTippy?: () => void;
    width?: string | number;
    containerEle?: HTMLElement | null;
    dataComponent: React.ReactNode;
    placement?: any;
    children?: React.ReactElement;
    trigger?: boolean | string;
    delay?: [number | null, number | null] | number | undefined;
    onHide?: () => void;
}

const TippyComponent: FC<TippyComponentProps> = (props) => {
    const {
        visible,
        trigger = 'mouseenter',
        handleHiddenTippy,
        placement = 'bottom',
        delay,
        width,
        containerEle,
        dataComponent,
        children,
        ...passProps
    } = props;

    const propsTrigger = {
        [trigger ? 'trigger' : 'visible']: trigger || visible,
    };

    return (
        <Tippy
            {...propsTrigger}
            onClickOutside={handleHiddenTippy}
            interactive
            delay={delay || [0, 700]}
            placement={placement}
            render={(attrs) => {
                return (
                    <div
                        className="wrapper-tippy-common"
                        style={{
                            width: width ? width : containerEle?.getBoundingClientRect().width,
                        }}
                        {...attrs}
                    >
                        {dataComponent}
                    </div>
                );
            }}
            {...passProps}
        >
            {children}
        </Tippy>
    );
};

export default TippyComponent;
