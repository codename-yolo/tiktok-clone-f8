import React, { FC, useMemo } from 'react';

import './index.scss';

interface DividerProps {
    children?: React.ReactNode;
    cls?: string;
    orientation: 'left' | 'right';
    size: number | string;
}

const Divider: FC<DividerProps> = (props) => {
    const { cls, orientation, size, children } = props;

    const styles = {
        [`margin${orientation.charAt(0).toUpperCase() + orientation.slice(1)}`]: size,
    };

    const conditionByOrientation = useMemo(() => {
        const obj = {
            left: 0,
            right: React.Children.count(children) - 1,
        };

        return obj[orientation];
    }, [children, orientation]);

    return (
        <div className={`wrapper-divider-common ${cls}`}>
            {React.Children.map(children, (child, idx) => (
                <div className="child" style={idx != conditionByOrientation ? styles : {}}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Divider;
