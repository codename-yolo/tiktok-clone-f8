import React, { forwardRef, useState } from 'react';

import { images } from '~/assets';

import './index.scss';

const { NoImage } = images;

interface ImageProps {
    src: string;
    alt?: string;
    cls?: string;
    fallback?: string;
}

const Image: React.ForwardRefRenderFunction<HTMLImageElement, ImageProps> = (props, ref) => {
    const { src, alt = '', cls = '', fallback: customFallback = NoImage, ...passProps } = props;

    const [fallBack, setFallBack] = useState<string>('');

    const handleImageError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            {...passProps}
            ref={ref}
            src={fallBack || src}
            className={`image-common ${cls}`}
            alt={alt}
            onError={handleImageError}
        />
    );
};

const ForwardRefImage = forwardRef(Image);

export default ForwardRefImage;
