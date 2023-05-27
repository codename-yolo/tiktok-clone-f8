import React, { FC } from 'react';

import styled from './index.module.scss';

const Footer: FC = () => {
    return (
        <div className={styled['wrapper-footer-side-bar']}>
            <div className={styled['content']}>
                <span>About</span>
                <span>Newsroom</span>
                <span>Contact</span>
                <span>Careers</span>
                <span>ByteDance</span>
            </div>
            <div className={styled['content']}>
                <span>TikTok for Good</span>
                <span>Advertise</span>
                <span>Developers</span>
                <span>Transparency</span>
                <span>TikTok Rewards</span>
                <span>TikTok Embeds</span>
            </div>
            <div className={styled['content']}>
                <span>Help</span>
                <span>Safety</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Creator Portal</span>
                <span>Community Guidelines</span>
            </div>

            <div className={styled['content']}>
                <span>© 2023 TikTok</span>
            </div>
        </div>
    );
};

export default Footer;
