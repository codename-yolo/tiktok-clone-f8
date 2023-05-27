export interface MenuItemType {
    id?: number;
    name: string;
    key: string;
    type?: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    children?: MenuItemType[];
    action?: string;
    cls?: string;
    to: string;
    tick?: boolean;
    likes_count?: string | number;
    followers_count?: string | number;
    followings_count?: string | number;
    bio?: string;
    instagram_url?: string;
    twitter_url?: string;
    website_url?: string;
    facebook_url?: string;
    youtube_url?: string;


}