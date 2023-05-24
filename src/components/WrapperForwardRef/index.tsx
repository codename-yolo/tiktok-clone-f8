import React, { ReactNode, forwardRef } from 'react';

interface WrapperRefProps {
    children?: ReactNode;
}

const WrapperForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, WrapperRefProps> = (
    props,
    ref,
) => {
    const { children } = props;

    return <div ref={ref}>{children}</div>;
};

const ForwardRefWrapper = forwardRef(WrapperForwardRef);

export default ForwardRefWrapper;
