export interface MenuType {
    id: number;
    name: string;
    key: string;
    type?: string;
    icon: React.ReactNode | string;
    children?: MenuType[];
    action?: string;
    cls?: string;
}

