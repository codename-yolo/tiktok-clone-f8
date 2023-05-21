import React, { forwardRef } from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

interface ButtonProps {
    size: 'large' | 'medium' | 'small';
    type: 'primary' | 'outline' | 'text';
    to?: string;
    href?: string;
    cls?: string;
    disable?: boolean;
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface CustomProps {
    to?: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const {
        size = 'medium',
        type,
        to,
        href,
        children,
        cls = '',
        disable,
        leftIcon,
        rightIcon,
        ...passProps
    } = props;

    let ButtonType: any = 'button';

    const customProps: CustomProps = {
        ...passProps,
    };

    if (disable && customProps?.onClick) {
        delete customProps.onClick;
    }

    if (to) {
        ButtonType = Link;
        customProps.to = to;
    } else if (href) {
        ButtonType = 'a';
        customProps.href = href;
    }

    return (
        <ButtonType
            ref={ref}
            className={`btn-common ${cls} btn-${type} ${size} ${disable ? 'disable' : ''}`}
            {...customProps}
        >
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="children">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </ButtonType>
    );
};

const Enh = forwardRef(Button);

export default Enh;
