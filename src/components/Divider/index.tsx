import React, { FC, useMemo } from 'react';

import styled from './index.module.scss';

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
        <div className={`${styled['wrapper-divider-common']} ${cls ? cls : ''}`}>
            {React.Children.map(children, (child, idx) => (
                <div
                    className={styled['child']}
                    style={idx != conditionByOrientation ? styles : {}}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Divider;
