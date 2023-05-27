export interface VideoType {
    id: number;
    uuid: string;
    user_id: number;
    type: string;
    thumb_url: string;
    file_url: string;
    description: string;
    music: string;
    is_liked: boolean;
    likes_count: number;
    comments_count: number;
    shares_count: number;
    views_count: number;
    viewable: string;
    allows: any[]; // You can replace `any` with a more specific type if needed
    published_at: string;
    created_at: string;
    updated_at: string;
    user: {
        id: number;
        first_name: string;
        last_name: string;
        nickname: string;
        avatar: string;
        bio: string;
        tick: boolean;
        is_followed: boolean;
        followings_count: number;
        followers_count: number;
        likes_count: number;
        website_url: string;
        facebook_url: string;
        youtube_url: string;
        twitter_url: string;
        instagram_url: string;
    };
    meta?: {
        file_size: number;
        file_format: string;
        mime_type: string;
        playtime_string: string;
        playtime_seconds: number;
        bitrate: number;
        video: {
            dataformat: string;
            rotate: number;
            resolution_x: number;
            resolution_y: number;
            fourcc: string;
            fourcc_lookup: string;
            frame_rate: number;
        };
    };
}